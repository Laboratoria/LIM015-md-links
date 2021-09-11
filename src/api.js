/* eslint-disable no-param-reassign */
const fs = require('fs'); // Load the File System module
const path = require('path'); // provides utilities for working with file and directory paths
const fetch = require('node-fetch'); // allows you to asynchronously request for a resource.

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
// const readFile = (route) => fs.readFileSync(route).toString();
// const readFile = (file) => {
//   try {
//     return fs.readFileSync(file, 'utf8' , (err, data) => {
//       if (err) {
//         return err;
//       }
//         return data;
//     });
//   }catch (e) {
//     return e;
//   }
// }

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

/* ***** Search Links in  a MD file ***** */
const regEx = /!*\[(.+?)\]\((https?.+?)\)/gi;
const regExText = /\[[^\s]+(.+?)\]/gi;
const regExLink = /\((https?.+?)\)/gi;

const getLinks = (route) => {
  const arrayLinks = [];
  searchMdFile(route).forEach((file) => {
    // const readingFile = readFile(file);
    const readingFile = fs.readFileSync(route, 'utf-8');
    const links = readingFile.match(regEx);
    if (readingFile.length !== 0 && regEx.test(readingFile) === true) {
      links.forEach((link) => {
        const hrefLink = link.match(regExLink).join().slice(1, -1);
        const textLink = link.match(regExText).join().slice(1, -1);
        const propertiesLinks = {
          href: hrefLink,
          text: textLink,
          file,
          // status: link.status,
          // Response: link.status > 199 && link.status < 400 ? 'ok' : 'fail',
        };
        arrayLinks.push(propertiesLinks);
      });
    }
  });
  return arrayLinks;
};

const getStatus = (arrayLink) => {
  // console.log('Function getStatus');
  // const linkRef = arrayLink.split(',');
  // console.log(linkRef);
  arrayLink.map((ref) => fetch(ref)
    .then(((response) => {
      ref.status = response.status;
      ref.mesagge = response.status === 200 ? 'Ok' : 'fail';
      console.log(ref);
    }))
    .catch((error) => {
      // console.log(error.message);
      // error.message = 'Fail';
      // throw new Error(error.toString());
      const err = new Error('Fail');
      console.log(err);
      // console.error(error.code);
      // error.Status = error.status;
      // error.Mesagge = err;
    }));
};

module.exports = {
  validatePath,
  pathExists,
  absolutePath,
  pathIsDir,
  readDir,
  mdValidation,
  // readFile,
  searchMdFile,
  getLinks,
  getStatus,
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
