// const { promise } = require('node-fetch');
const fnNode = require('./src/api.js');

const mdLink = (path, option = {}) => new Promise((resolve, reject) => {
  // console.log('hola');
  const absolutePath = fnNode.absolutePath(path);
  if (fnNode.pathExists(absolutePath)) {
    const arrLinks = fnNode.getLinks(absolutePath);
    // fnNode.getStatus(getLinks);
    if (arrLinks.length === 0) {
      reject(new Error('Something bad happened, this route does not have links :c'));
    } else if (option.validate === true) {
      const linkStatus = fnNode.getStatus(arrLinks);
      resolve(linkStatus);
    } // else {
    //   response(fnNode.getLinks(absolutePath));
    // }
  } else {
    reject(new Error('path no exist'));
  }
  return Promise;
});

module.exports = {
  mdLink,
};
