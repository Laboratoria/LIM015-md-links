const fs = require('fs'); // Load the File System module
const path = require('path'); // provides utilities for working with file and directory paths

/* ***** Function validate path ***** */
const validatePath = (route) => fs.existsSync(route);

/* ***** Check If Path(directory or folder) exists ***** */
const pathExists = (route) => (fs.existsSync(route) ? route : 'Path not found.');

/* ***** Function absolute path // make absolute Path ***** */
const absolutePath = (route) => (path.isAbsolute(route) ? route : path.resolve(route));

/* ***** Check If Path its a Directory ***** */
const pathIsDir = (route) => fs.statSync(route).isDirectory();

/* ***** Read Directory(folder) exists ***** */
const readDir = (route) => fs.readdirSync(route);

/* ***** Check if file is a MD file ***** */
// eslint-disable-next-line no-unneeded-ternary
// const mdValidation = (route) => (path.extname(route) === '.md' ? readFile(route) : false);
const mdValidation = (route) => (path.extname(route) === '.md' ? [route] : []);

/* ***** Read File exists ***** */
// read the file and turn it into a string
const readFile = (route) => fs.readFileSync(route).toString();

/* ***** Search a MD file in a Directory ***** */
const searchMdFile = (route) => {
  if (pathIsDir(route)) {
    const directoryArray = readDir(route);
    return directoryArray.reduce((accumulator, element) => {
      const absoluteElementPath = path.join(route, element);
      return accumulator.concat(searchMdFile(absoluteElementPath));
    }, []);
  }
  return (mdValidation(route));
};

module.exports = {
  validatePath,
  pathExists,
  absolutePath,
  pathIsDir,
  readDir,
  mdValidation,
  readFile,
  searchMdFile,
  // mdFileLinks,
};

/* ***** determines if a path is a file ***** */
// const pathIsFile = fs.statSync(route).isFile()

// const pathIsFile = (route) => fs.statSync(route).isFile();

/* ***** Check If Path(directory or folder) exists ***** */
// const pathExists = (route) => (fs.existsSync(route) ? route : 'Path not found.');

/* ***** Function validate path ***** */
// object provides information about a file.
// const statusPath = (route) => fs.statSync(route);

/* ***** Read a directory and make an array with files in it  ***** */
// const arrayDirFile = (route) => readDir(route).map((element) => path.join(route, element));
