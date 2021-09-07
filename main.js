const { Promise } = require('node-fetch');
const fnNode = require('./src/api.js');

const mdLink = (path, option) => new Promise((response, reject) => {
  const absolutePath = fnNode.absolutePath(path);
  if (fnNode.pathExists(absolutePath)) {
    const getLinks = fnNode.getLinks(absolutePath);
    if (getLinks.length === 0) {
      reject(new Error('something bad happened, this route does not have links :c'));
    } else if (option.validate === true) {
      const linkStatus = getLinks.map((link) => fnNode.getLinks(link));
      response(Promise.all(linkStatus));
    } else {
      response(fnNode.getLinks(absolutePath));
    }
  } else {
    reject(new Error('path no exist'));
  }
  return Promise;
});

module.exports = {
  mdLink,
};
/* ***** Test files are conected ***** */
// console.log('Hello World');

// linkStatus('../LIM015-md-links/Testing_functions/testing_md.md').then((statusLink) => {
//   console.log(statusLink);
// });

/* ***** Practice promises ***** */
// const promise = new Promise((resolve, reject) => {
//   // la función se ejecuta automáticamente cuando se construye la promesa
//   // después de 1 segundo, indica que la tarea está hecha con el resultado "hecho"
//   setTimeout(() => resolve(console.log('hecho')), 1000);
//   setTimeout(() => reject(new Error('¡Vaya!')), 1000);
// });

// const promesa = new Promise((resolve, reject) => {
//   // sin que nos quite tiempo para hacer la tarea
//   resolve(console.log(123)); // dar inmediatamente el resultado: 123
//   reject(Error);
// });
