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
    extIsMd(route) ? container.push(pathAbsolute(route)) : false
  }
  return container;
};

// función para obtener un array con los objs(href, textContent y ruta) de archivos .md
const traverseFilesToFindLinks = (route) => {
  let arrLinks = [];
  const renderer = new marked.Renderer();
  traverseDirectoryFindFiles(route).forEach((file) => {
    const md = readFile(file);
    renderer.link = (href, title, text) => {
      const obj = {
        href: href,
        title: text,
        text: file,
      }
      arrLinks.push(obj);
    };
    marked(md, { renderer });
  });
  return arrLinks;
}

// console.log(traverseFilesToFindLinks('lib/mdLinks.md'));


module.exports = {
  traverseDirectoryFindFiles,
  traverseFilesToFindLinks,
}