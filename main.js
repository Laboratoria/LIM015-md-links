/* ***** Functions from api.js ***** */
// const { validatePath } = require('./src/api.js');
// const { absolutePath } = require('./src/api.js');
// const { directory } = require('./src/api.js');
// const { readDir } = require('./src/api.js');
// const { arrayDirFile } = require('./src/api.js');
// const { readFile } = require('./src/api.js');
// const { mdValidation } = require('./src/api.js');
// const { statusPath } = require('./src/api.js');
// const { pathIsDir, pathIsFile } = require('./src/api.js');
const { searchMdFile } = require('./src/api.js');
// const { pathExists } = require('./src/api.js');

/* ***** Test files are conected ***** */
// console.log('Hello World');

/* ***** Test how to works functions ***** */
// console.log(validatePath('../LIM015-md-links'));
// console.log(absolutePath('./LIM015-md-links'));
// console.log(directory('../LIM015-md-links/coverage/lcov-report'));
// console.log(directory('../coverage'));
// console.log(readDir('../LIM015-md-links'));
// console.log(readFile('../LIM015-md-links/Testing_functions/testing_md.md'));
// console.log(mdValidation('../LIM015-md-links/Testing_functions/testing_md.md'));
// console.log(mdValidation('../LIM015-md-links/src/api.js'));
// console.log(arrayDirFile('../LIM015-md-links'));
// console.log(statusPath('../LIM015-md-links/Testing_functions/testing_md.md'));
// console.log(statusPath('../LIM015-md-links/src/api.js'));
// console.log(statusPath('../LIM015-md-links/README.md'));
// console.log(pathIsDir('../LIM015-md-links'));
// console.log(pathIsDir('../LIM015-md-links/README.md'));
// console.log(pathIsFile('../LIM015-md-links'));
// console.log(pathIsFile('../LIM015-md-links/README.md'));
// console.log(searchMdFile('../LIM015-md-links/Testing_functions'));
// console.log(searchMdFile('../LIM015-md-links/Testing_functions/testing_md.md'));
// console.log(searchMdFile('../LIM015-md-links'));
// console.log(searchMdFile('../LIM015-md-links/README.md'));
console.log(searchMdFile('../LIM015-md-links/src/api.js'));
// console.log(searchMdFile('M015-md-links/Tesg_functions'));

/* ***** Practice promises ***** */
// const promise = new Promise((resolve, reject) => {
//   // la función se ejecuta automáticamente cuando se construye la promesa
//   // después de 1 segundo, indica que la tarea está hecha con el resultado "hecho"
//   setTimeout(() => resolve(console.log('hecho')), 1000);
//   setTimeout(() => reject(new Error('¡Vaya!')), 1000);
// });

// const promesa = new Promise((resolve, reject) => {
//   // sin que nos quite tiempo para hacer la tarea
//   resolve(console.log(123)); // dar inmediatamente el resultado: 123
//   reject(Error);
// });
