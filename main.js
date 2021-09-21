/* eslint-disable max-len */
const { mdLink } = require('./src/index.js');

const route = process.argv[2];

mdLink(route, { validate: true })
  .then((response) => {
    console.log(response);
  }).catch((error) => { console.log(error.message); });

// EJECUTE NODE
/*
node main.js 'C:\Users\Estudiante\Documents\GitHub\LIM015-md-links\testing_functions\testing_md.md'
*/

/* TESTING STATS
const algo = [
  {
    file: 'C:\\Users\\Estudiante\\Documents\\GitHub\\LIM015-md-links\\testing_functions\\testing_md.md',
    href: 'https://www.npmjs.com/',
    message: 'Ok',
    text: 'Sitio oficial de npm (en inglés)',
    status: 200,
  },
  {
    href: 'https://www.nmjs.com/',
    status: 'No status',
    file: 'C:\\Users\\Estudiante\\Documents\\GitHub\\LIM015-md-links\\testing_functions\\testing_md.md',
    message: 'Fail request to https://www.nmjs.com/ failed, reason: getaddrinfo ENOTFOUND www.nmjs.com',
  },
];
console.log(statsLinks(algo));
*/ /*
const algo = [
  {
    file: 'C:\\Users\\Estudiante\\Documents\\GitHub\\LIM015-md-links\\testing_functions\\testing_md.md',
    href: 'https://www.npmjs.com/',
    message: 'Ok',
    text: 'Sitio oficial de npm (en inglés)',
    status: 200,
  },
  {
    href: 'https://www.nmjs.com/',
    status: 'No status',
    file: 'C:\\Users\\Estudiante\\Documents\\GitHub\\LIM015-md-links\\testing_functions\\testing_md.md',
    message: 'Fail request to https://www.nmjs.com/ failed, reason: getaddrinfo ENOTFOUND www.nmjs.com',
  },
];
console.log(broken(algo)); */
