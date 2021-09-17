const fs = require('fs');
const path = require('path');

// funcion para pasar la ruta (callback)
const getPath = (route) => route

// analiza si la función existe (condicional)
const pathExist = (route) => fs.existsSync(route) ? true : false;

// analiza para saber si es ruta absoluta (condicional)
const pathAbsolute = (route) => path.isAbsolute(route) ? true : false;

// convierte la ruta relativa en absoluto (intruccion)
const relativeToAbsolutePath = (route) => path.resolve(route);

// analiza para saber si estas en un directorio (condicional)
const pathIsDirectory = (route) => fs.statSync(route).isDirectory() ? true : false;

// ingresar al directorio (intruccion)
const readDirectory = (route) => fs.readdirSync(route);

// analizar si es un archivo con extension md (condicional)
const extIsMd = (route) => path.extname(route) === '.md' ? true : false;

// leer el contenido de un archivo (intruccion)
const readFile = (route) => fs.readFileSync(route).toString();

// verificar si existen links (condicional)

// console.log(path.extname('lib/READMELAB.txt'));

module.exports = {
  getPath,
  pathExist,
  pathAbsolute,
  relativeToAbsolutePath,
  pathIsDirectory,
  readDirectory,
  extIsMd,
  readFile,
};
