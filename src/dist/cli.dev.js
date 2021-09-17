#!/usr/bin/env node
"use strict";

var chalk = require('chalk');

var _require = require('./index'),
    mdLinks = _require.mdLinks;

var _require2 = require('./cli-fn'),
    linksStats = _require2.linksStats,
    linksRotos = _require2.linksRotos,
    mensajeHelp = _require2.mensajeHelp,
    rutaSinLinks = _require2.rutaSinLinks,
    rutaNoExiste = _require2.rutaNoExiste;

var rutadelUsuario = process.argv[2];
var option = process.argv.slice(2);
var validate = option.includes('--v' || '--validate');
var stats = option.includes('--s' || '--stats');

if (option.length === 1) {
  mdLinks(rutadelUsuario, {
    validate: validate
  }).then(function (resolve) {
    return console.log(resolve);
  })["catch"](function (reject) {
    if (reject === 'Ruta no existe') {
      console.log(rutaNoExiste);
    } else {
      console.log('hola1', rutaSinLinks);
    }
  });
} else if (validate) {
  mdLinks(rutadelUsuario, {
    validate: validate
  }).then(function (res) {
    return console.log(res);
  })["catch"](function (e) {
    return console.log(rutaSinLinks, e);
  });
} else if (stats) {
  mdLinks(rutadelUsuario, {
    validate: validate
  }).then(function (res) {
    return console.table(chalk.greenBright(linksStats(res)));
  })["catch"](function (e) {
    return console.log(rutaSinLinks, e);
  });
} else if (validate && stats) {
  console.log('hola');
  mdLinks(rutadelUsuario, {
    validate: validate
  }).then(function (res) {
    console.table(chalk.green(linksStats(res)));
    console.table(chalk.red(linksRotos(res)));
  })["catch"](function (e) {
    return console.log(rutaSinLinks, e);
  });
} else {
  mdLinks(rutadelUsuario, {
    validate: validate
  }).then(console.log(mensajeHelp))["catch"](function (e) {
    return console.log(rutaSinLinks, e);
  });
}