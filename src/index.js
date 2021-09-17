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
