// const { promise } = require('node-fetch');
const fnNode = require('./api.js');

const mdLink = (path, option = {}) => new Promise((resolve, reject) => {
  const absolutePath = fnNode.absolutePath(path);
  if (fnNode.pathExists(absolutePath)) {
    const arrLinks = fnNode.getLinks(absolutePath);
    if (arrLinks.length === 0) {
      reject(new Error('Something bad happened, this route does not have links :c'));
    } else if (option.validate === true) {
      const linkStatus = fnNode.getStatus(arrLinks);
      resolve(linkStatus);
    }
  } else {
    reject(new Error('path no exist'));
  }
});

module.exports = {
  mdLink,
};
