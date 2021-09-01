const { mdLinks } = require('./mdlinks');
const option = require('./option');
// const { totalAndUnique, totalLinksBroken } = require('./option');

// console.log(process.argv);
const argument = process.argv.slice(2);
// console.log(argument.length);

if (argument.length === 1) {
  mdLinks(argument[0], { validate: false })
    .then(res => res.forEach( el => console.log(`${el.file} ${el.href} ${el.text}`)))
    .catch(err => console.log(err));
}

if (argument.length === 2) {
  switch (argument[1]) {
  case '--validate':
    mdLinks(argument[0], { validate: true })
      .then(res => res.forEach(el => console.log(`${el.file} ${el.href} ${el.message} ${el.status} ${el.text}`)))
      .catch(err => console.log(err));
    break;
  
  case '--stats':
    mdLinks(argument[0], { validate: true })
      .then(res => console.log(option.totalAndUnique(res)))
      .catch(err => console.log(err));
    break;
  
  case '--help':
    console.log(`
    --------------------------------------------------------------------------------------------------------------
    ('--validate') muestra la ruta, enlace, numero de status, status cada link (OK o FAIL) y el texto
    ('--stats') muestra el número total de links y los links unicos(no se repiten).      
    ('--stats --validate') muestra el total de links, únicos y rotos.
    *Nota : Si no ingresa nunguna opcion, solo debe ingresar la ruta y obtendra como resultado la ruta, el link y el texto del archivo.
    --------------------------------------------------------------------------------------------------------------
    `);
    break;
    
  default: console.log('Lo siento, no es un comando válido. Intente con la opcion --help');
    break;
  }
}

if (argument.length === 3) {
  mdLinks(argument[0], { validate: true })
    .then(res => console.log(`${option.totalAndUnique(res)}\n${option.totalLinksBroken(res)}`))
    .catch(err => console.log(err));
}
