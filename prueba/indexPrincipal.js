//IndexPrincipal.js importa a mdlinks.js//
/*import cool from '../prueba/mdlinks.js' // Si se trabaja con ESmodule*/

/* Si, puedes crear uno api.js y otro mdlinks.js, Index.js importa a mdlinks.js,Y mdlinks.js puede ser llamado desde la linea de comandos,
El primer paso es leer un parámetro desde la terminal
Node index.js /carpetA/ (“/carpeta")*/

const mdLinks = require('../prueba/mdLinks'); //modulo, que permite acceder a las funciones para leer o escribir data del file sistem, y retorna un objeto.
const fs = require('fs'); //modulo, que permite acceder a las funciones para leer o escribir data del file sistem, y retorna un objeto.
const pruebaRuta = fs.readFileSync(process.argv);

mdLinks.prueba('mundo');
console.log(pruebaRuta);