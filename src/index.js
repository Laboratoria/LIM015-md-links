// Desde este archivo debes exportar una función (mdLinks).
// import { existsSync } from 'fs';
const fs = require('fs');
// const chalk = require('chalk');

// console.log(global);

// console.log(process.env.NOMBRE);

// console.log(chalk.blue.bgRed.bold('Hello world!'));

/// OBTENER RUTA
// 1. obtener la ruta absoluta
const getPath = process.argv[1];
console.log(getPath); // indica la ruta
// 2. Verificar su existe la ruta
// if (existsSync(getPath[1]))
//   console.log('The path exists.');

// LEER LA RUTA
console.log(fs.readFile);

// ESCRIBIR LA RUTA
console.log(fs.writeFile);

// BORRAR LA RUTA
console.log(fs.unlink);

module.exports = () => {
  console.log('hola mundo');
};

function mdLinks(route) {
  return new Promise(function (resolve, reject) {
  });
};

// =======
// proceso desde un directorio para obtener los archivos md en un array
const traverseDirectoryFindFilesMd = (route) => {
  let files = [];
  if (pathIsDirectory(route)) {
    readDirectory(route).forEach((data) => extIsMd(data) ? files.push(data) : false);
    // traverseDirectoryFindFilesMd(route); // REVISAR CON COACHES
  } else {
    extIsMd(route) ? files.push(route) : false;
  }
  return files;
};

// Obtener todos los links dentro de un archivo .md
const getLinks = (route) => {
  let allLinks=[];
  traverseDirectoryFindFilesMd(route).map((file) => {
    console.log(readFile(file));
  });
  return allLinks;
}


