const fs = require('fs');
const path = require('path');

// funcion para pasar la ruta (callback)
function getPath(paths) {
  return paths;
}

// funcion callback para obtener una funcion error
function showError(err) {
  return err;
}

// analiza si la función existe
function pathExist(route) {
  return fs.existsSync(route) ? true : false;
}

// analiza para saber si es ruta absoluta, sino la convierte
function pathAbsolute(route) {
  return path.isAbsolute(route) ? true : path.resolve(route);
}

// analiza para saber si estas en un directorio
function pathIsDirectory(route) {
  return fs.statSync(route).isDirectory() ? true : false;
}

module.exports = {
  getPath,
  pathExist,
  pathAbsolute,
  pathIsDirectory,
};
