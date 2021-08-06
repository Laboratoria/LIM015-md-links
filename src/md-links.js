#!/usr/bin/env node 
const index = require('./index');
const { rejects } = require('assert');
const [,, pathSent, ...options] = process.argv;
const fetch = require('node-fetch');
// const http = require('http');
const https = require('https');
const { url } = require('inspector');
const { Console } = require('console');


const mdLinks = function(path, options) {

    const isValid = index.validatePath(path);
    let urls = [];
    let arrayMessage = [];

    if( isValid ) {
        const allFiles = index.arrayFilePath(pathSent);
        const filesMd = index.listFilesMd(allFiles);

        if (filesMd.length === 0) {
            console.error(
            `                Error: no hay 
            archivos .md para analizar`
            );
            return;
        } 
        else {
            const filesMdAbsolute = index.toPathAbsolute(filesMd);
            const infoUrls = index.readFilesMd(filesMdAbsolute);
            if (infoUrls[0] === null) {
                console.error(
                    `            Error: no hay 
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
        console.error('Error: ${path} es una ruta inválida');
        return;
    };

    for (const url of urls) {
        let message = {
            path: url.filePath,
            href: url.urlsArray
        };
        arrayMessage.push(message);
    }

    if (options.length === 0 ) {

        for (const message of arrayMessage) {
            console.log(message.path, message.href)
        }

    } else {


    }
}(pathSent, options);


// Promise.all( [mdLinks.validateFalse()] ).then((allResp) => {
//     console.log(allResp);
// });

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