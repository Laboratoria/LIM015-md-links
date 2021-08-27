const functions = require ('./api.js');
 
const mdLinks = (path , options = {}) => 
  new Promise ((resolve, reject) => {
    if (!functions.existsRoute(path)) {
      reject('ruta no existe');
    } else {      
      const showObject = functions.extracProLinks(path);
      if (options.validate === false) {        
        resolve(showObject);
      } 
      else if (options.validate === true) {
        const statusLinks = functions.getStatusLinks(showObject);
        statusLinks.then((resul) => resolve(resul));
      }
    }

  });
  
// const resultado = mdLinks('./src/prueba/directorio2', { validate: false });
// console.log(resultado);

// const resultado = mdLinks('./src/prueba/directorio2', { validate: true });
// resultado.then((resul) => {
//   console.log(resul);
// });

// const resultado = mdLinks('./src/prueba/directorio');
// console.log(resultado);

module.exports = { mdLinks };
