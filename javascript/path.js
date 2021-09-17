const fs = require('fs');
const path = require('path');

// funcion para pasar la ruta (callback)
function getPath(paths) {
  return paths;
}

// analiza si la función existe
function pathExist(route) {
  return fs.existsSync(route) ? true : false;
}

// analiza para saber si es ruta absoluta, sino la convierte
function pathAbsolute(route) {
  return path.isAbsolute(route) ? true : false;
}

// convierte la ruta relativa en absoluto
function relativeToAbsolutePath(route) {
  return path.resolve(route);
}

// analiza para saber si estas en un directorio
function pathIsDirectory(route) {
  return fs.statSync(route).isDirectory() ? true : false;
}

// ingresar al directorio
function readDirectory(route) {
  return fs.readdirSync(route);
}

// DETENTE! AQUI LEER README!
// analizar si es un archivo con extension md
function extIsMd(route) {
  return path.extname(route) === '.md' ? true : false;
}

// leer el contenido de un archivo .md

// console.log(path.extname('lib/READMELAB.txt'));

module.exports = {
  getPath,
  pathExist,
  pathAbsolute,
  relativeToAbsolutePath,
  pathIsDirectory,
  readDirectory,
  extIsMd,
};
