#!/usr/bin/env node

const { mdLinks } = require('./mdlinks');
const option = require('./option');
const colors = require('colors');
// const { totalAndUnique, totalLinksBroken } = require('./option');

// console.log(process.argv);
const argument = process.argv.slice(2);
// console.log(argument.length);

if (argument.length === 1) {
  mdLinks(argument[0], { validate: false })
    .then(res => res.forEach( el => console.log(`${colors.green(el.file)} ${colors.rainbow(el.href)} ${colors.brightMagenta(el.text)}`)))
    .catch(err => console.log(err));
}

if (argument.length === 2) {
  switch (argument[1]) {
  case '--validate':
    mdLinks(argument[0], { validate: true })
      .then(res => res.forEach(el => console.log(`${colors.green(el.file)} ${colors.rainbow(el.href)} ${colors.yellow(el.message)} ${colors.yellow(el.status)} ${colors.brightMagenta(el.text)}`)))
      .catch(err => console.log(err));
    break;
  
  case '--stats':
    mdLinks(argument[0], { validate: true })
      .then(res => console.log(colors.brightMagenta(option.totalAndUnique(res))))
      .catch(err => console.log(err));
    break;
  
  case '--help':
    console.log(`
    --------------------------------------------------------------------------------------------------------------
    ${colors.yellow('--validate')} muestra la ruta, enlace, numero de status, status cada link (OK o FAIL) y el texto
    ${colors.yellow('--stats')} muestra el número total de links y los links unicos(no se repiten).      
    ${colors.yellow('--stats --validate')} muestra el total de links, únicos y rotos.
    --------------------------------------------------------------------------------------------------------------
    ${colors.green('Nota: Si no ingresa ninguna opcion, solo debe ingresar la ruta y obtendra como resultado la ruta, el link y el texto del archivo.')}    
    `);
    break;
    
  default: console.log(colors.brightRed('Lo siento, no es un comando válido. Intente con la opcion --help'));
    break;
  }
}

if (argument.length === 3) {
  mdLinks(argument[0], { validate: true })
    .then(res => console.log(`${colors.brightMagenta(option.totalAndUnique(res))}\n${colors.red(option.totalLinksBroken(res))}`))
    .catch(err => console.log(err));
}
