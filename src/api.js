const fs = require('fs'); // Load the File System module
const path = require('path'); // provides utilities for working with file and directory paths

/* ***** Function validate path***** */
const validatePath = (route) => fs.existsSync(route);

/* ***** Function absolute path // make absolute Path ***** */
const absolutePath = (route) => (path.isAbsolute(route) ? route : path.resolve(route));

/* ***** Check If Directory(folder) exists***** */
const directory = (dir) => (fs.existsSync(dir) ? dir : 'Directory not found.');

/* ***** Read Directory(folder) exists***** */
const readDir = (route) => fs.readdirSync(route);

module.exports = {
  validatePath,
  absolutePath,
  directory,
  readDir,
};

// fs.statSync(path) method returns the instance of fs.Stats
// stats.isFile() returns true if file path is File, otherwise returns false.
// stats.isDirectory() returns true if file path is Directory, otherwise returns false.
