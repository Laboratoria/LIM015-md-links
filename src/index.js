/* eslint-disable linebreak-style */
// Acá estoy requiriendo usar librería nativa de node File System
const fs = require('fs');

// Acá estoy requiriendo usar el metodo que resulve rutas relativas
const path = require('path');

// Función para saber si la ruta existe
const routeExists = (route) => fs.existsSync(route);

// Función para saber si la ruta es absoluta y resolverla
const routeAbsolute = (route) => path.isAbsolute(route) ? route : path.resolve(route);
console.log(routeAbsolute('../Prueba/hola.txt'), 13);

const isDirectory = (route) => fs.statSync(route).isDirectory();
console.log(isDirectory('C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\LIM015-md-links\\Prueba'), 16)
// console.log(routeExists('C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\LIM015-md-links\\Prueba\\hola.txt'));

// const getFile = (route) => {
//   let newArr = [];
//   const readDir = fs.readdir(route);
//   if (isDirectory(route)) {
//     readDir.forEach((element => {
//       path.join(route, '/', element);
//       const elementFile = getFile(path.resolve(route, '/', element));
//       elementFile.concat(newArr);
//     });
//   } else {
//     newArr.push(route);
//   }
//   return newArr;
// };

module.exports = {
  routeExists,
  routeAbsolute,
  isDirectory,
};
