const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
// const marked = require('marked');

/* valida si existe la ruta */
const existsRoute = (route) => fs.existsSync(route);

/* valida si la ruta es absoluta */
// const isAbsolute = (route) => path.isAbsolute(route);

/* convertir ruta relativa a absoluta */
// const convertAbsolute = (route) => path.resolve(route);

/* valida si la tura es absoluta y la retorna, si es rrlativa la convierte a absoluta. */
const routeValidation = (route) => path.isAbsolute(route) ? route : path.resolve(route);

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

/* Funcion para extraer cada archivo .md con su ruta */
const extracPathFilesMd = (route) => {
  let arrayFilesMd = [];
  const pathAbsolute = routeValidation(route);
  if (isFile(pathAbsolute) && (isFileMd(pathAbsolute) === '.md')) { // guarda en un array la ruta de archivos .md
    arrayFilesMd.push(pathAbsolute);
  } else if (isDirectory(pathAbsolute) && readDirectory(pathAbsolute).length !== 0) {
    joinFilewithPath(pathAbsolute).forEach((elemento) => {
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

const getStatusLinks = (arrayLinks) => {
  const array = arrayLinks.map((elemento) => 
    fetch(elemento.href)
      .then((res) => {
        const data = {
          href: elemento.href,
          text: elemento.text,
          file: elemento.file,
          status: res.status,
          message: res.status >= 200 && res.status <= 399 ? 'Ok' : 'fail',
        };
        return data;
      }).catch((error) => {
        const data = {
          href: elemento.href,
          text: elemento.text,
          file: elemento.file,
          status: 'Error en la peticiòn ' + error,
          message: 'fail',
        };
        return (data);
      }));
  return Promise.all(array);
};

module.exports = {
  existsRoute,
  routeValidation,
  isDirectory,
  isFile,
  isFileMd,
  readDirectory,
  joinFilewithPath,
  readFile,
  extracPathFilesMd,
  extracProLinks,
  getStatusLinks
};
