const fs = require('fs');
const path = require('path');

// funcion para pasar la ruta
function route(paths) {
  return paths;
};

// analiza si la función existe
function pathExist(route) {
  if (fs.existsSync(route)) {
    return true;
  } else {
    return false;
  }
};

// analiza para saber si es ruta absoluta, sino la convierte
function pathAbsolute(route) {
  if (path.isAbsolute(route)) {
    return true;
  } else {
    return path.resolve(route);
  }
}

module.exports = {
  route,
  pathExist,
  pathAbsolute,
};
