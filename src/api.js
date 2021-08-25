const fs = require('fs');
const path = require('path');
// const marked = require('marked');

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

/* valida si es un archivo */
const isFile = (route) => fs.statSync(route).isFile();

/* valida si es un archivo .md */
const isFileMd = (route) => path.extname(route);

/* lee archivos de un directorio */
const readDirectory = (route) => fs.readdirSync(route);

/* Despues de leer un directorio, el nombre de los archivos unirlo con su ruta */
const joinFilewithPath = (route) => {
  return readDirectory(route).map((index) => path.join(route, index));
};

/* leer un archivo .md */
const readFile = (route) => fs.readFileSync(route).toString();

/* Funcion para extraer cada arvhivo .md con su ruta */
const extracPathFilesMd = (route) => {
  let arrayFilesMd = [];
  if (isFile(route) && (isFileMd(route) === '.md')) { // guarda en un array la ruta de archivos .md
    arrayFilesMd.push(route);
  } else if (isDirectory(route) && readDirectory(route).length !== 0) {
    joinFilewithPath(route).forEach((elemento) => {
      const newRouteWithFile = elemento;
      const saveRoutesNew = extracPathFilesMd(newRouteWithFile);
      arrayFilesMd = arrayFilesMd.concat(saveRoutesNew);
    });
  }
  return arrayFilesMd;
};

const regexAll = /\[([\w\s\d.()]+)\]\((((ftp|http|https):\/\/)[\w\d\s./?=#&_%~,\-.:]+)\)/g;
const regxText = /\[([\w\s\d.()]+)\]/g;
const regexLink = /\((((ftp|http|https):\/\/)[\w\d\s./?=#&_%~,\-.:]+)\)/g ;

/* Funcion para extraer cada link y mostrar sus propiedades */
const extracProLinks = (route) => {
  const arrayProLinks = [];
  extracPathFilesMd(route).forEach( (file) => {
    const readingFile = readFile(file);
    const links = readingFile.match(regexAll);
    if ( readingFile !== 0 && regexAll.test(readingFile) === true) {
      links.forEach((link) => {
        const propertiesLinks = {
          href : link.match(regexLink).join().slice(1,-1),
          text : link.match(regxText).join().slice(1,-1),
          file : file,
        };
        arrayProLinks.push(propertiesLinks);
      });
    }
  });
  return arrayProLinks;
};

console.log(extracProLinks('C:\\Users\\bethz\\Documents\\Laboratoria\\archivos'));
