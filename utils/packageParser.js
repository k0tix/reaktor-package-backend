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
    let packages = [];

    for await (const line of openedFile) {
        // Currently parsed package finished
        if (line.length === 0) {
            packages.push(currentPackage);

            currentPackage = {};
            currentKey = '';
            continue;
        }

        const separatorIndex = line.indexOf(':');
        let value = line.slice(separatorIndex + 2);

        if (line.charAt(0) === ' ') {
            currentPackage[currentKey] += value;
        } else {
            const lineKey = line.slice(0, separatorIndex);

            currentPackage[lineKey] = lineKey === 'Depends' ? rmVersionsAndDuplicates(value) : value;
            currentKey = lineKey;
        }
    }

    return packages;
}

const rmVersionsAndDuplicates = (dependencies) => {
    return [...new Set(dependencies.split(/, | \| /).map((pkg) => pkg.split(' ')[0]))];
};

module.exports = parsePackages;
