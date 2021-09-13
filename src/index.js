#!/usr/bin/env node
// module.exports = () => {
//   // ...
// };
const {searchFileMd, readLinksMd, pathExist, isAbsolute} = require("./ruta.js");

// const fs = require('fs');
// const path = require('path');

const mdLinks = (path, options) => {
    const newPromise = new Promise((resolve,reject) =>{
        const absolute = isAbsolute(path)
        const existPath = pathExist(absolute);
        if (existPath === 'La ruta no existe'){
            reject('La ruta no es valida');
        } else {
            const searchMdFile = searchFileMd(absolute);
            const readMdLinks = readLinksMd(searchMdFile);
            
        }
    });
};

// console.log(process.argv);
// console.log(path.normalize('src//img'));