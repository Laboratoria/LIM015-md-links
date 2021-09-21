#!/usr/bin/env node

const arg = process.argv[2];

const commander = require('commander');


const { mdLinks } = require('./index.js');
const { uniqueLink, brokenLink, totalLink } = require('./ruta.js');

const program = new commander.Command();
program.version('0.0.1');
program
  .name('md-links')
  .usage('[options]')
  .option('--validate', 'Valida links de los archivos .md')
  .option('--stats', 'Muestra el total de links y el total de links unicos')
  .option('--validate --stats', 'Muestra el total de links, total de links unicos y el total de links rotos');


const validateOption = (option1, option2) => {
    if (option1 === '--validate' || option2 === '--validate'){
        return { validate: true };
    } else {
        return { validate: false };
    }
};

const mdLinksCli = (path, option1, option2) => {
    const validate = validateOption(option1, option2);
    return mdLinks(validate, path).then((response => {
        let output = '';

        if(response.length === 0) {
            output += 'No se encontraron archivos .md';
        };
        if(option1 === '--stats' && option2 === '--validate') {
            output =  `\nTotal: ${totalLink(response)} \nUnique: ${uniqueLink(response)} \nBr`
        }
    }))
}

mdLinks(arg, { validate: false }).then(resolve => {
    console.log(resolve);
}).catch(reject => console.log(reject));

