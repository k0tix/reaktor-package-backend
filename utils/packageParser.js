const fs = require('fs');
const readline = require('readline');

async function parsePackages(filePath) {
    const fileStream = fs.createReadStream(filePath);

    const openedFile = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let currentPackage = {};
    let currentKey = '';
    let packageMap = new Map();

    for await (const line of openedFile) {
        // Currently parsed package finished
        if (line.length === 0) {
            packageMap.set(currentPackage.package, currentPackage);
            currentPackage = {};
            currentKey = '';
            continue;
        }

        const separatorIndex = line.indexOf(':');
        let value = line.slice(separatorIndex + 2);

        if (line.charAt(0) === ' ') {
            currentPackage[currentKey] += '\n' + value;
        } else {
            const lineKey = line.slice(0, separatorIndex).toLowerCase();

            currentPackage[lineKey] = lineKey === 'depends' ? rmVersionsAndDuplicates(value) : value;
            currentKey = lineKey;
        }
    }

    let packageList = Array.from(packageMap, ([_key, value]) => value);
    return packageList.map(p => formatPackage(packageMap, packageList, p));
}

const rmVersionsAndDuplicates = (dependencies) => {
    return [...new Set(dependencies.split(/, | \| /).map((pkg) => pkg.split(' ')[0]))];
};

const formatPackage = (packageMap, packageList, package) => {
    let newPackage = { name: package.package, description: package.description };

    let [dependencies, alternatives] = separateDepenciesAndAlternatives(packageMap, package);
    newPackage.dependencies = dependencies;
    newPackage.alternatives = alternatives;

    newPackage.reverseDependencies = mapReverseDependencies(packageList, package);

    return newPackage;
};

const mapReverseDependencies = (packageList, package) => {
    return packageList
        .filter(p => p.depends !== undefined ? p.depends.includes(package.package) : false)
        .map(p => p.package);
};

const separateDepenciesAndAlternatives = (packageMap, package) => {
    let dependencies = [];
    let alternatives = [];

    package.depends !== undefined
        ? package.depends.forEach((p) => packageMap.has(p) ? dependencies.push(p) : alternatives.push(p))
        : [];

    return [dependencies, alternatives];
};

module.exports = parsePackages;
