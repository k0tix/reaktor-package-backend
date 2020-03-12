# Reaktor 2020 Pre-assignment for junior developer positions

## Demo

[package-xplorer](https://package-xplorer.herokuapp.com/)

## Frontend

[Link to frontend repo](https://github.com/k0tix/reaktor-package-frontend)

## Install

```bash
git clone https://github.com/k0tix/reaktor-package-backend.git
cd reaktor-package-backend
npm install
```

If you want to serve the frontend from backend also install

```bash
git clone https://github.com/k0tix/reaktor-package-frontend.git
cd reaktor-package-frontend
npm install
```

## Running locally

### Full application (backend + frontend)

```bash
cd reaktor-package-backend
npm run build:ui
npm start
```

You can access the site by connecting to the port the server is running on.

### Only backend

```bash
cd reaktor-package-backend
npm start
```

Backend returns the parsed file from route /api/packages

## Instructions

On a Debian and Ubuntu systems, there is a file called /var/lib/dpkg/status that holds information about software packages that the system knows about. Write a small program in a programming language of your choice that exposes some key information about packages in the file via an HTML interface.

The index page lists installed packages alphabetically with package names as links.
When following each link, you arrive at a piece of information about a single package. The following information should be included:

* Name
* Description
* The names of the packages the current package depends on (skip version numbers)
* Reverse dependencies, i.e. the names of the packages that depend on the current package
* The dependencies and reverse dependencies should be clickable and the user can navigate the package structure by clicking from package to package.

Only look at the Depends field. Ignore other fields that work kind of similarly, such as Suggests and Recommends.

Sometimes there are alternates in a dependency list, separated by the pipe character |. When rendering such dependencies, render any alternative that maps to a package name that has an entry in the file as a link and just print the name of the package name for other packages.