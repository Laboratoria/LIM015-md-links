#!/usr/bin/env node 
const process = require('process');
const { rejects } = require('assert');
const { resolve } = require('path');
const [,, pathSent, ...options] = process.argv;
const fetch = require('node-fetch');
require('colors');

const index = require('./index');

const mdLinks = function(path, options) {
    // console.clear();

    const isValid = index.validatePath(path);
    let urls = [];

    if( isValid ) {
        const allFiles = index.arrayFilePath(pathSent);
        const filesMd = index.listFilesMd(allFiles);

        if (filesMd.length === 0) {
            process.stderr.write(`                
            Error: no hay 
            archivos .md para analizar`
            );
            return;
        } 
        else {
            const filesMdAbsolute = index.toPathAbsolute(filesMd);
            const infoUrls = index.readFilesMd(filesMdAbsolute);
            if (infoUrls[0] === null) {
                process.stderr.write(`            
                Error: no hay 
                links para analizar`
                );
                return;
            }
            for (let i = 0; i < infoUrls.length; i++) {
                for (let j = 0; j < infoUrls[i].length; j++) {
                    urls.push(infoUrls[i][j]);
                }
            } 
        }

    }else {
        if(pathSent === '--help'){
            process.stdout.write(`
            md-links <path-to-file> [options]

            Uso:

            ${ ' $ md-links <path-to-file>'.bgGray  }                           acción por default que analiza el archivo Markdown, 
            imprime los links que contiene, junto con la ruta del archivo donde aparece y el texto que hay dentro 
            del link (truncado a 50 caracteres).

                $ md-links ./some/example.md
                ./some/example.md http://algo.com/2/3/ Link a algo
                ./some/example.md https://otra-cosa.net/algun-doc.html algún doc
                ./some/example.md http://google.com/ Google

            Opciones:
            
            ${'$ md-links ./some/example.md --validate'.bgGray }            analiza si el link funciona o no y devuelve su status.

                $ md-links ./some/example.md --validate
                ./some/example.md http://algo.com/2/3/ ok 200 Link a algo
                ./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
                ./some/example.md http://google.com/ ok 301 Google

            ${'$ md-links ./some/example.md --stats '.bgGray }              devuelve estadísticas básicas sobre los links.
                $ md-links ./some/example.md --stats
                Total: 3
                Unique: 3

            ${ '$ md-links ./some/example.md --stats --validate'.bgGray }     devuelve estadísticas de los resultados de la validación.
                $ md-links ./some/example.md --stats --validate
                Total: 3
                Unique: 3
                Broken: 1
            `)
        }else if (pathSent === undefined) {
            process.stderr.write(`
            por favor ingrese la ruta del 
            archivo a analizar 
        `.red);
        } else {
            process.stderr.write(`
            Error: ${path} es una 
            ruta inválida
        `.red);
        return;
        }
    };

    if (options.length === 0 ) {

        for (const url of urls) {
            console.log(url.file, url.href)
        }
        
    } else {
        if (options.length === 1){
            if (options[0] === '--validate') {
                // return new Promise((resolve, rejects) => {
                    // let urlx = []
                    for (const url of urls) {
                        fetch(url.href)
                        .then((res) => {
                            url.status = res.status; 
                            url.ok = res.statusText;
                            // console.log(url)
                            return url;
                        })
                        .catch((error) => {
                            error.message;
                        })
                        // return urls;
                    }
                    console.log(urls)
                    return Promise.all(urls)
                    
                // })

            } else if (options[0] === '--stats') {
                let countedUrls = urls.reduce(function (allUrls, url) {
                    return (url.href in allUrls ? allUrls[url.href]++ : allUrls[url.href]=1, allUrls) 
                }, {})
                const unique = Object.values(countedUrls)
                console.log(`Total: ${urls.length}`)
                console.log(`Unique: ${unique.length}`)
            } else {
                console.error(('orden no encontrada'));
            }
        } else if (options.length === 2) {
            if (options[0] === '--stats' && options[1] === '--validate') {
                console.log('es stats y validate')
            } else {
                console.error(('orden no encontrada'));
            }
        }
    }
};


mdLinks(pathSent, options).then((resp) => {
    console.log(resp);
});

// Promise.then((result) => {
//     console.log(result)
// })

module.exports = { mdLinks }
// const checkLinks = (url) => {
//     url.forEach(element => {
//         console.log(element)
//     });
// }

// const onlyMd = index.typePath(route);
// // console.log(onlyMd)
// const list = index.listFiles(route)
// console.log(list)



// const [,, pathSent] = process.argv;
// const [,,, ...options] = process.argv;
// const [,, route] = process.argv;
// const routeAbsolute = index.validateRoute(route);
// console.log(routeAbsolute)
// const allFiles = index.listFiles(routeAbsolute );
// console.log(allFiles)
// const onlyMd = index.listFilesMd(allFiles);
// console.log(onlyMd)
// const urlData = index.checkLinks(onlyMd)
// console.log(urlData)
// var url_analizada = /^(\w+):\/\/([^\/]+)([^]+)$/.exec(urls[0][7]);
// console.log(url_analizada)
// for (let i=0; i<urlsObject.length; i++){
//     for (let j=0; j<urls[i].length; j++) {
//         // let url = new URL(urls[i][j]);
//         // const message = {
//         //     // path: index.toPathAbsolute(),
//         //     href: url.href,
//         //     text: url.origin
//         // }
//         // // return new Promise((resolve, rejects) => {
//         // //     resolve(`${message.path} ${message.href} ${message.text}`)
//         // // })
//         // let promise =  new Promise((resolve, rejects) => {
//         //     resolve(`${message.path}  ${message.href}  ${message.text}`)
//         // })
//         // promise.then((result) => {
//         //     console.log(result)
//         // })
//         // console.log(`${message.path} ${message.href} ${message.text}`);
//     }
// }


// imtento de hacer promesa 
// if( index.validatePath(path) ) {
//     return new Promise((resolve, rejects) => { 
//         if (filesMdAbsolute.length === 0) {
//             rejects(
//             `       Error: no hay 
//                 archivos .md para analizar`
//             );
//             return;
//         } 
//         else {
//             for (const url of urls) {
//                 message = {
//                 path: url.filePath,
//                 href: url.urlsArray,
//                 // text: urlsObject[i]
//                 }
//             resolve(`${message.path}  ${message.href}`);
//             // return `${message.path}  ${message.href}`;
//             }
//         }
//     })
// }else {
//     console.error('Error: ${path} es una ruta inválida');
//     return;
// }

//comentario intento crear nueva funcion
    // const validateFalse = () => {
    //     if( index.validatePath(path) ) {
    //         return new Promise((resolve, rejects) => { 
    //         if (filesMdAbsolute.length === 0) {
    //             rejects(
    //             `       Error: no hay 
    //                 archivos .md para analizar`
    //             );
    //             return;
    //         } 
    //         else {
    //             for (const url of urls) {
    //                 message = {
    //                 path: url.filePath,
    //                 href: url.urlsArray,
    //                 // text: urlsObject[i]
    //                 }
    //             resolve(`${message.path}  ${message.href}`);
    //             return `${message.path}  ${message.href}`;
    //             }
    //         }
    //     })
    //     } else {
    //     console.error('Error: ${path} es una ruta inválida');
    //     return;
    //     }
    // }

    //peticion http
    // https.get(urlNew.host + urlNew.pathname, (response) => {
//     let data = '';
//     response.on('data', (chunk) => {
//         data += chunk;
//     });
//     response.on('end', () => {
//         console.log(data)
//     })
// })