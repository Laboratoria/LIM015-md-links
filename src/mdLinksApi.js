// traer el modulo de path
const { pathExist, pathAbsolute,
  pathIsDirectory, readDirectory, extIsMd, readFile, concatRoute } = require('./path.js');
const marked = require('marked');

// const chalk = require('chalk');

// función recursiva para detectar archivos .md
const traverseDirectoryFindFiles = (route) => {
  let container = [];
  if (pathIsDirectory(route)) {
    readDirectory(route).forEach((element) => {
      const newRoute = concatRoute(route, element);
      const loopOfRoutes = traverseDirectoryFindFiles(newRoute);
      container = container.concat(loopOfRoutes);
    });
  } else {
    extIsMd(route) ? container.push(route) : false
  }
  return container;
};

const traverseFilesToFindLinks = (route) => {
  let arrLinks = [];
  const renderer = new marked.Renderer();
  return traverseDirectoryFindFiles(route).map((file) => {
    const md = readFile(file);
    renderer.link = (href, title, text) => {
      const obj = {
        href: href,
        title: text,
        text: file,
      }
      return obj.href + obj.title + obj.text;
    };
    return marked(md, { renderer });
  });
}

console.log(traverseFilesToFindLinks('lib/mdLinks.md'));

module.exports = {
  traverseDirectoryFindFiles,
}