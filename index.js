const chalk = require('chalk');
console.log(chalk.blue.bgRed.bold('Hello world!'));

console.log(process.argv[1]); //indica la ruta
module.exports = () => {
  console.log('hola mundo');
};
