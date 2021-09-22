#!/usr/bin/env node
/* eslint-disable max-len */
const colorText = require('chalk');
// const { mdLink } = require('../main.js'); // viene de main.js (entra a help y trae validate pero no entra con validate)
const { mdLink } = require('./index.js'); // viene de index.js (entra a help, pero no a validate)

const {
  statsLinks,
  broken,
  help,
  errorPath,
  errorNoLinks,
} = require('./stats_messages');

const pathOrHelp = process.argv[2];
const options = process.argv.slice(2);
// console.log(process.argv);
const hasValidate = options.includes('--validate');
const hasStats = options.includes('--stats');
const hasHelp = options.includes('--help') || pathOrHelp === '--help';

if (hasHelp) {
  console.log(colorText.yellow(help));
} else {
  mdLink(pathOrHelp, { validate: true })
    .then((response) => {
      if (hasValidate && !hasStats) {
        console.log(response);
      }
      if (hasStats && !hasValidate) {
        console.log(statsLinks(response));
        // console.log(response);
      }
      if ((hasStats && hasValidate) || (hasValidate && hasStats)) {
        console.log(colorText.green(statsLinks(response)));
        console.log(colorText.red(broken(response)));
        // console.log(response);
      }
    }).catch((error) => {
      // console.log(error.message);
      if (error.message === 'Something bad happened, this route does not have links :c') {
        console.log(colorText.red(errorNoLinks));
      } else {
        console.log(colorText.red(errorPath));
      }
    });
}
// if ((hasStats && hasValidate)/* || (hasValidate && hasStats ) */) {
//   mdLink(pathOrHelp, { validate: true })
//     .then((response) => {
//       console.log(colorText.green(statsLinks(response)));
//       console.log(colorText.red(broken(response)));
//     }).catch((error) => {
//     // console.log(error.message);
//       if (error.message === 'Something bad happened, this route does not have links :c') {
//         console.log(colorText.red(errorNoLinks));
//       } else {
//         console.log(colorText.red(errorPath));
//       }
//     });
// }

// .catch((reject) => {
//   if (error.message === 'no such file or directory') {
//     console.log(colorText.red(errorNoLinks));
//   } else {
//     console.log(colorText.red(errorPath));
//   }
// });

// if (pathOrHelp.length === 1) {
//   mdLinks(pathOrHelp, { validate: hasValidate })
//     .then((response) => console.log(response))
//     .catch((reject) => {
//       if (reject === 'Something bad happened, this route does not have links :c') {
//         console.log(colorText.red(errorNoLinks));
//       } else {
//         console.log(colorText.red(errorPath));
//       }
//     });
// }

// if (pathOrHelp.length === 2) {
//   switch (pathOrHelp[1]) {
//     case '--validate':
//       mdLinks(pathOrHelp[0], { validate: true });
//       break;
//     case '--stats':
//       mdLinks(pathOrHelp[0], { validate: true })
//         .then(() => console.log(colorText.bgGreen(statsLinks)));
//       break;
//     case '--help':
//       console.log(colorText.magenta(help));
//       break;
//     default:
//       console.log(colorText.magenta(help));
//   }
// }

// if (pathOrHelp.length === 3) {
//   if ((pathOrHelp[1] === '--validate' && pathOrHelp[2] === '--stats') || (pathOrHelp[1] === '--stats' && pathOrHelp[2] === '--validate')) {
//     mdLinks(options[0], { validate: true })
//       .then((response) => console.log(colorText.greenBright(statsLinks) + (colorText.red(broken(response)))));
//   }
// } else {
//   console.log(colorText.magenta(help));
// }

/*
node main.js 'C:\Users\Estudiante\Documents\GitHub\LIM015-md-links\testing_functions\testing_md.md'
*/
