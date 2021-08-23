const fs = require('fs');
const path = require('path');

/* valida si existe la ruta */
const existsRoute = (route) => fs.existsSync(route);

/* valida si la ruta es absoluta */
const isAbsolute = (route) => path.isAbsolute(route);

/* convertir ruta relativa a absoluta */
const convertAbsolute = (route) => path.resolve(route);

/* valida si la tura es absoluta y la retorna, si es rrlativa la convierte a absoluta. */

const routeValidation = (route) => {
  return (path.isAbsolute(route)) === true ? route : path.resolve(route);
};

/* valida si es un directorio */
const isDirectory = (route) => fs.statSync(route).isDirectory();

/* valida si es un archivo */
const isFile = (route) => fs.statSync(route).isFile();

/* valida si es un archivo .md */
const isFileMd = (route) => path.extname(route);

/* lee archivos de un directorio */
const readDirectory = (route) => fs.readdirSync(route);

/* valida si el archivo .md contieene links */

/* leer un archivo .md */
const readFile = (route) => fs.readFileSync(route).toString();
