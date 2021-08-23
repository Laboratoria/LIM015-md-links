const fs = require('fs');
const path = require('path');

/* valida si existe la ruta */
const existsRoute = (route) => fs.existsSync(route);
console.log(existsRoute('C:\\Users\\bethz\\Documents\\Laboratoria'));
console.log(existsRoute('./src/prueba'));

/* valida si la ruta es absoluta */
const isAbsolute = (route) => path.isAbsolute(route);
console.log(isAbsolute('C:\\Users\\bethz\\Documents\\Laboratoria'));
console.log( isAbsolute('./src/prueba'));

/* convertir ruta relativa a absoluta */
const convertAbsolute = (route) => path.resolve(route);
// const convert = convertAbsolute('./src/prueba');
console.log(convertAbsolute('C:\\Users\\bethz\\Documents\\Laboratoria\\archivos'));

/* valida si la tura es absoluta y la retorna, si es rrlativa la convierte a absoluta. */

const routeValidation = (route) => {
  return (path.isAbsolute(route)) === true ? route : path.resolve(route);
};
console.log(routeValidation('./src/prueba'));

/* valida si es un directorio */
const isDirectory = (route) => fs.statSync(route).isDirectory();
// console.log(isDirectory('C:\\Users\\bethz\\Documents\\Laboratoria\\archivos\\file3.md'));

/* valida si es un archivo */
const isFile = (route) => fs.statSync(route).isFile();
// console.log(isFile('C:\\Users\\bethz\\Documents\\Laboratoria\\archivos\\file3.md'));

/* valida si es un archivo .md */
const isFileMd = (route) => path.extname(route);
// console.log(isFileMd('C:\\Users\\bethz\\Documents\\Laboratoria\\archivos\\file3.md'));

/* lee archivos de un directorio */
const readDirectory = (route) => fs.readdirSync(route);
// console.log(readDirectory(convert));

/* Despues de leer un directorio, el nombre de los archivos unirlo con su ruta */
const joinFilewithPath = (route) => {
  return readDirectory(route).map((index) => path.join(route, index));
};

// const joinFilewithPath = (route) => {
//   return readDirectory(route).length === 0 ? 'directorio vacio' : readDirectory(route).map((index) => path.join(route, index));
// };
// console.log(joinFilewithPath('C:\\Users\\bethz\\Documents\\Laboratoria\\archivos\\directorio2'));

/* leer un archivo .md */

const readFile = (route) => fs.readFileSync(route).toString();
console.log(readFile('C:\\Users\\bethz\\Documents\\Laboratoria\\archivos\\file3.md'));

const extracPathFilesMd = (route) => {
  let arrayFilesMd = [];
  if (isFile(route) && (isFileMd(route) === '.md')) { // guarda en un array la ruta de archivos .md
    arrayFilesMd.push(route);
  } else if (isDirectory(route) && readDirectory(route).length !== 0) {
    joinFilewithPath(route).forEach((elemento) => {
      const newRouteWithFile = elemento;
      const saveRoutesNew = extracPathFilesMd(newRouteWithFile);
      // arrayFilesMd.push(saveRoutesNew);
      arrayFilesMd = arrayFilesMd.concat(saveRoutesNew);
    });
  } else {
    console.log('no es un archivo .md o es un directorio vacio');
  }
  return arrayFilesMd;
};
  
console.log(extracPathFilesMd('C:\\Users\\bethz\\Documents\\Laboratoria\\archivos')); 
