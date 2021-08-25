const { validatePath } = require('./src/api.js');
const { absolutePath } = require('./src/api.js');
const { directory } = require('./src/api.js');
const { readDir } = require('./src/api.js');
// console.log('Hello World');

console.log(validatePath('../LIM015-md-links'));
console.log(absolutePath('/Documents/GitHub/LIM015-md-links'));
console.log(directory('../LIM015-md-links/coverage/lcov-report'));
console.log(directory('../coverage'));
console.log(readDir('../LIM015-md-links'));
