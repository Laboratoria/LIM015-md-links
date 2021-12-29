#!/usr/bin/env node

const chalk = require('chalk');
const { mdLinks } = require('./index');

const {
  linksStats, linksRotos, mensajeHelp, rutaSinLinks, rutaNoExiste,
} = require('./cli-fn');

const rutadelUsuario = process.argv[2];
const option = process.argv.slice(2);
const validate = option.includes('--v' || '--validate');
const stats = option.includes('--s' || '--stats');
if (option.length === 1) {
  mdLinks(rutadelUsuario, { validate })
    .then((resolve) => console.log(resolve))
    .catch((reject) => {
      if (reject === 'Ruta no existe') {
        console.log(rutaNoExiste);
      } else {
        console.log('hola1', rutaSinLinks);
      }
    });
} else if (validate) {
  mdLinks(rutadelUsuario, { validate })
    .then((res) => console.log(res))
    .catch((e) => console.log(rutaSinLinks, e));
} else if (stats) {
  mdLinks(rutadelUsuario, { validate })
    .then((res) => console.table(chalk.greenBright(linksStats(res))))
    .catch((e) => console.log(rutaSinLinks, e));
} else if (validate && stats) {
  console.log('hola');
  mdLinks(rutadelUsuario, { validate })
    .then((res) => {
      console.table(chalk.green(linksStats(res)));
      console.table(chalk.red(linksRotos(res)));
    })
    .catch((e) => console.log(rutaSinLinks, e));
} else {
  mdLinks(rutadelUsuario, { validate })
    .then(console.log(mensajeHelp))
    .catch((e) => console.log(rutaSinLinks, e));
}
