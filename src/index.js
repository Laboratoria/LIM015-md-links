#!/usr/bin/env node
// module.exports = () => {
//   // ...
// };
// const {searchFileMd, readLinksMd, pathExist, isAbsolute} = require("./ruta.js");
const methods = require('./ruta.js');

// const fs = require('fs');
// const path = require('path');

const mdLinks = (path, options) => {
    const newPromise = new Promise((resolve,reject) =>{
        const absolute = methods.isAbsolute(path)
        const existPath = methods.pathExist(absolute);
        if (existPath === 'La ruta no existe'){
            reject('La ruta no es valida');
        } else {
            const searchMdFile = methods.searchFileMd(absolute);
            const readMdLinks = methods.readLinksMd(searchMdFile);
            
        }
    });
};

// console.log(process.argv);
// console.log(path.normalize('src//img'));