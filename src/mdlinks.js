const functions = require ('./api.js');

const mdLinks = (path , options ) => 
  new Promise ((resolve, reject) => {
    if (!functions.existsRoute(path)) {
      reject('ruta no existe');
    } else {
      const showObject = functions.extracProLinks(path);
      if (options === 'false') {
        resolve(showObject);
      } else if (options === 'true') {
        const statusLinks = functions.getStatusLinks(showObject);
        // resolve(statusLinks);
        // console.log(statusLinks);       
        statusLinks.forEach(ele => ele.then((res) => console.log(res)));
      }
    }

  });

const resultado = mdLinks('./src/prueba', 'true');
console.log(resultado);
// resultado.then(res => console.log(res));
// .then((res) => console.log(res));
