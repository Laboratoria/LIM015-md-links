#!/usr/bin/env node

const arg = process.argv[2];

// const commander = require('commander');

const { mdLinks } = require('./index.js');
const { uniqueLink, brokenLink, totalLink } = require('./ruta.js');

// const program = new commander.Command();
// program.version('0.0.1');
// program
//   .name('md-links')
//   .usage('[options]')
//   .option('--validate', 'Valida links de los archivos .md')
//   .option('--stats', 'Muestra el total de links y el total de links unicos')
//   .option('--validate --stats', 'Muestra el total de links, total de links unicos y el total de links rotos');
//   program.parse(process.argv);
// const validateOption = (option1, option2) => {
//     if (option1 === '--validate' || option2 === '--validate'){
//         return { validate: true };
//     } else {
//         return { validate: false };
//     }
// };
// const mdLinksCli = (path, option1, option2) => {
//     const validate = validateOption(option1, option2);                  
//     return mdLinks(path, validate ).then((response) => {
//         let output = '';
//         if(response.length === 0) {
//             output += 'No se encontraron archivos .md';
//         };
//         if(option1 === '--stats' && option2 === '--validate') {
//             output =  `\nTotal: ${totalLink(response)} \nUnique: ${uniqueLink(response)} \nBroken: ${brokenLink(response)}`;
//         };
//         if(option1 === '--stats' && option2 === undefined) {
//             output = `\nTotal: ${totalLink(response)} \nUnique: ${uniqueLink(response)}`;
//         };
//         if (option1 === '--validate' && option2 === undefined) {
//             response.forEach((objectLinks) => {
//                 output += `\n${objectLinks.pathFile} ${objectLinks.href} ${objectLinks.status} ${objectLinks.statusText} ${objectLinks.text}`;
//             });
//         };
//         if(option1 === undefined) {
//             response.forEach((objectLinks) => {
//                 output += `\n${objectLinks.pathFile} ${objectLinks.href} ${objectLinks.text}`;
//             });
//         };
//         if(option1 !== '--stats' && option1 !== '--validate' && option1 !== undefined) {
//             output = 'No se encontro el comando';
//         };
//         return output;
//     }).catch(() => 'es un error');
// };
// mdLinks(arg, { validate: false }).then(resolve => {
//     console.log(resolve);
// }).catch(reject => console.log(reject));



const [, , ...args] = process.argv;

// const validateOption = (option1, option2) => {
// if (args[1] === '--validate' || args[2] === '--validate') {
//     mdLinks(arg, { validate: true }).then(resolve => {
//         console.log(resolve);
//     }).catch(reject => console.log(reject));
// } else {
//     mdLinks(arg, { validate: false }).then(resolve => {
//         console.log(resolve);
//     }).catch(reject => console.log(reject));
// };

if (args.length === 1) {
    mdLinks(arg, { validate: false }).then(resolve => {
        console.log(resolve);
    }).catch(reject => console.log(reject));
}

if (args.length === 2) {
    if (args[1] === '--stats') {
        mdLinks(arg, { validate: true }).then((resolve) => console.log(totalLink(resolve) + uniqueLink(resolve)))
            .catch((err) => console.log(err));
    };
    if (args[1] === '--validate') {
        mdLinks(arg, { validate: true }).then(resolve => {
                    console.log(resolve);
                }).catch(reject => console.log(reject));
    };
};

if (args.length === 3) {
    if ((args[1] === '--stats' && args[2] === '--validate') || (args[1] === '--validate' && args[2] === '--stats')) {
        mdLinks(arg, { validate: true }).then((resolve) => console.log(totalLink(resolve) + uniqueLink(resolve) + brokenLink(resolve)))
            .catch((err) => console.log(err));
    };
};
// if (args[1] !== '--stats' && args[1] !== '--validate' && args[1] !== null) {
//     console.log('no se encontro comando valido')
// };



// module.exports = {
//     mdLinksCli
// }