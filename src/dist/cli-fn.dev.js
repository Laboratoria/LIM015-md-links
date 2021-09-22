#!/usr/bin/env node
"use strict";

var chalk = require('chalk'); // const figlet = require('figlet');
// const rutadelUsuario = process.argv[2];
// estadisticas de los links

/* figlet('Md-Links', {
  font: 'Ghost',
  horizontalLayout: 'deafult',
  verticalLayout: 'defaul',
}, (err, result) => {
  console.log(err || result);
}); */


var linksStats = function linksStats(arr) {
  var total = [];
  var unique = new Set();
  arr.forEach(function (element) {
    total.push(element.href);
    unique.add(element.href);
  });
  return "Total : ".concat(total.length, "\nUnique : ").concat(unique.size);
}; // console.log(linksStats([rutadelUsuario]));


var linksRotos = function linksRotos(array) {
  var broken = array.filter(function (element) {
    return element.status > 400;
  }).length; // eslint-disable-next-line no-console

  return console.log("\nBroken:".concat(broken));
}; // console.log(linksRotos([]));


var respuesta = chalk.bold.bgGreen(" \n --v  \xF3  --validate : devuelve el href(link), title(titulo), el status (estado) y message(mensaje) de cada link. \n --s  \xF3  --stats: devuelve el resultado total (cantidad total de links), Unique(cantidad de links que no se repiten).  \n --v  --s  \xF3  --validate --stats : devuelve Total, Unique y broken(total de links fail)");
var mensajeHelp = chalk.bold.bgBlue('¿Necesitas Ayuda?', respuesta);
var rutaSinLinks = chalk.bold.yellowBright('No tienes links');
var rutaNoExiste = chalk.bold.redBright('No Existe ruta');
module.exports = {
  linksStats: linksStats,
  linksRotos: linksRotos,
  mensajeHelp: mensajeHelp,
  rutaSinLinks: rutaSinLinks,
  rutaNoExiste: rutaNoExiste
};