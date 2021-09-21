/* eslint-disable max-len */
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
const mdValidation = (route) => (path.extname(route) === '.md' ? [route] : []);

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
  const arrStatus = arrayLink.map((ref) => fetch(ref)
    .then(((response) => {
      const responseStatus = response.status === 200 ? 'Ok' : 'fail';
      const data = {
        file: ref.file,
        href: ref.href,
        message: responseStatus,
        text: (ref.text.slice(0, 50)),
        status: response.status,
      };
      return data;
    }))
    .catch((error) => {
      const data = {
        href: ref.href,
        status: 'No status',
        file: ref.file,
        message: `Fail ${error.message}`,
      };
      return data;
    }));
  return Promise.all(arrStatus);
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
