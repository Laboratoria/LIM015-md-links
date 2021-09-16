#!/usr/bin/env node
// module.exports = () => {
//   // ...
// };

const arg1 = process.argv[2];
const arg2 = process.argv[3];
// console.log(typeof arg1, arg2, 'estoooooooooo');
const methods = require('./ruta.js');

const mdLinks = (path, options) => 
 new Promise((resolve,reject) => {
        const absolute = methods.isAbsolute(path);
        // console.log(absolute, 'the book');
        const existPath = methods.pathExist(absolute);
        // console.log('ESTE ES EL PATH',  options);
        // console.log(existPath, 'the book');
        if (existPath){
            const searchMdFile = methods.searchFileMd(absolute);
            // const readMdLinks = methods.readLinksMd(searchMdFile);
            // console.log(searchMdFile, 'hola');
            const arrayLinks = searchMdFile.map((elem) => {
               return methods.readLinksMd(elem);
                // console.log(elem, 'elemento');
            });
            // console.log(arrayLinks[0], 'elemento');
            // const readMdLinks = methods.readLinksMd(searchMdFile);
            // console.log(typeof path);
            // if(options.validate === true){
                const readMdLinks = methods.readLinksMd(path)
            if(options === 'true'){
                // console.log('readMdLinks', readMdLinks);
                const validacionLinks = readMdLinks.map((links) => {
                    const validacion = methods.validateLink(links);
                    // console.log('validacion', validacion);
                    return validacion;
                });
                resolve(Promise.all(validacionLinks));
            } else {
                resolve(readMdLinks);
            }
        } else {
            reject('La ruta no es valida');
        }
    });
//   console.log(arg[0], 'es esto');
    mdLinks(arg1, arg2).then(resolve => {
        console.log(resolve);
      }).catch(reject => console.log(reject));
      
    // mdLinks('./Pruebaa/archivo.md', true).then(resolve => {
    //       console.log(resolve);
    //       }).catch(reject => console.log(reject));

// console.log(mdLinks('Pruebaa\archivo.md'));

module.exports = {
    mdLinks
}

// console.log(process.argv);
// console.log(path.normalize('src//img'));