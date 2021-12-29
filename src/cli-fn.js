#!/usr/bin/env node
const chalk = require('chalk');
// const figlet = require('figlet');
// const rutadelUsuario = process.argv[2];
// estadisticas de los links

/* figlet('Md-Links', {
  font: 'Ghost',
  horizontalLayout: 'deafult',
  verticalLayout: 'defaul',
}, (err, result) => {
  console.log(err || result);
}); */
const linksStats = (arr) => {
  const total = [];
  const unique = new Set();
  arr.forEach((element) => {
    total.push(element.href);
    unique.add(element.href);
  });
  return `Total : ${total.length}\nUnique : ${unique.size}`;
};
// console.log(linksStats([rutadelUsuario]));

const linksRotos = (array) => {
  const broken = array.filter((element) => element.status > 400).length;
  // eslint-disable-next-line no-console
  return console.log(`\nBroken:${broken}`);
};
// console.log(linksRotos([]));

const respuesta = chalk.bold.bgGreen(` 
 --v  ó  --validate : devuelve el href(link), title(titulo), el status (estado) y message(mensaje) de cada link. 
 --s  ó  --stats: devuelve el resultado total (cantidad total de links), Unique(cantidad de links que no se repiten).  
 --v  --s  ó  --validate --stats : devuelve Total, Unique y broken(total de links fail)`);

const mensajeHelp = chalk.bold.bgBlue('¿Necesitas Ayuda?', respuesta);

const rutaSinLinks = chalk.bold.yellowBright('No tienes links');

const rutaNoExiste = chalk.bold.redBright('No Existe ruta');

module.exports = {
  linksStats, linksRotos, mensajeHelp, rutaSinLinks, rutaNoExiste,
};
