const fs = require('fs');
const path = require('path');

// funcion síncrona para saber si una ruta existe (condicional)
const pathExist = (route) => fs.existsSync(route) ? true : false;

// analiza para saber si es ruta absoluta sino la convierte (condicional)
const pathAbsolute = (route) => path.isAbsolute(route) ? route : path.resolve(route);

// analiza para saber si estas en un directorio (condicional)
const pathIsDirectory = (route) => fs.statSync(route).isDirectory() ? true : false;

// función síncrona que lee un directorio (intruccion)
const readDirectory = (route) => fs.readdirSync(route);

// función síncrona que analiza si la extensión de un archivo es .md (condicional)
const extIsMd = (route) => path.extname(route) === '.md' ? true : false;

// función síncrona que lee un archivo (intruccion)
const readFile = (route) => fs.readFileSync(route).toString();

// función que une las rutas (callback)
const concatRoute = (route1, route2) => path.join(route1, route2);

module.exports = {
  pathExist,
  pathAbsolute,
  pathIsDirectory,
  readDirectory,
  extIsMd,
  readFile,
  concatRoute,
};
