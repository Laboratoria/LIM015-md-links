#!/usr/bin/env node 
// chmod +x index.js         //  # Make the file executable
//file existe: /home/marga/laboratoria/LIM015-data-lovers/README.md
//             ../../laboratoria
//              /home/marga/README.md   ../../README.md
//              /home/marga/test/README.md   ../../../test.md
const fs = require('fs');
const path = require('path');

const validatePath = (pathSent) => {
    return fs.existsSync(pathSent) ? true  : false; 
};

const checkTypePath = (pathSent) => { // Verifica si es directorio
    return fs.lstatSync(pathSent).isDirectory();
};

const arrayFilePath = (pathSent) => {
    const isDirectory = checkTypePath(pathSent);
    let files = [];
    if (isDirectory) {
        const paths = fs.readdirSync(pathSent);
        paths.forEach(element => {
            files = files.concat(arrayFilePath(pathSent + '/' + element));
        })
    } else {
        files.push(pathSent);
    }
    return files;
};

const listFilesMd = (list) => { //listar los archivos md
    return list.filter(file => path.extname(file) === '.md');
};

const toPathAbsolute = (list) => { // Pasar a ruta absoluta
    return list.map(element => {
        return path.resolve(element);
    })
};

const readFilesMd = (list) => { //Lee los links de los archivos md
    const regEXp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    return list.map(file => {
        const fileContent = fs.readFileSync(file, 'UTF-8');
        const urls = fileContent.match(regEXp);

        if (urls === null){
            return null;
        }
        const infoUrls = urls.map(url => {
            const infoUrl = {
                filePath: file,
                urlsArray: url.slice(0, -1)
            }
            return infoUrl;
        })
        return infoUrls;
    })
};


module.exports = { validatePath, checkTypePath, listFilesMd, readFilesMd, arrayFilePath, toPathAbsolute }


// const validateRoute = (routeCommand) => {
//     return fs.existsSync(routeCommand) ? true  : false; 
// }

// //fs.createReadStream
// const checkLinks = (listFilesMd) => {
//     const regEXp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
//     let links = [];
//     return new Promise((resolve, rejects) => {
//         listFilesMd.forEach(file => {
//             fs.readFile(file, 'UTF-8', (error, file) => {
//                 if(error){
//                     rejects(error);
//                 }
//                 resolve(links.push(file.match(regEXp)));
//             })
//         })
//     })
// }

// const isDirectory = checkTypePath(pathSent);
// const listmd = toPathAbsolute(isDirectory);
// // const links = checkLinks(listmd)
// // console.log(checkLinks(listmd))

// // let userToken = AuthUser(data)
// // console.log(userToken) // Promise { <pending> }

// // userToken.then(function(result) {
// //    console.log(result) // "Some User token"
// // })

// let url = checkLinks(listmd);
// url.then(function(result) {
//     console.log(result)
// })


// // console.log(file)
// // console.log(path.join(path.dirname(module.parent.filename),file))
// var directories = path.dirname(__filename);
// console.log(directories + file)
// const fileName = path.resolve(__dirname, file);

// const list = listFilesOfDirectory(pathSent);
// console.log(verifyTypePath())
// if (typePath(pathSent) === tr**/*ESAE}ue) {,
//     arrayListFilesMd = listFilesOfDirectory(pathSent).filter(file => path.extname(file) === '.md');
//     arrayListFilesMd.forEach(file => {
//         console.log(pathSent + '/' + file);
//     });
// } else  {
//     console.log(path.resolve(pathSent))
// }








// const validateRoute = (routeCommand) => {
//     return fs.existsSync(routeCommand) ? path.resolve(routeCommand)  : null; 
// };

// const listFiles = (routeAbsolute) => {
//     return fs.lstatSync(routeAbsolute).isDirectory() ? fs.readdirSync(routeAbsolute) : [__dirname + path.basename(routeAbsolute)];//retorne en false un array con el nombre del archivo
// };

// const listFilesMd = (list) => {
//     return list.filter(file => path.extname(file) === '.md');
// };

// //fs.createReadStream
// const checkLinks = (listFilesMd) => {
//     const regEXp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
//     const urlArray = listFilesMd.map(file => {
//         // console.log(file)
//         // console.log(path.join(path.dirname(module.parent.filename),file))
//         // var directories = path.dirname(__filename);
//         // console.log(directories + file)
//         const fileName = path.resolve(__dirname, file);
//         console.log(fileName)
//         fs.readFile(fileName, 'UTF-8', (error, file) => {
//             if(error){
//                 throw error;
//             }
//             const url = file.match(regEXp);
//             console.log(url);
//         })
//     })
//     // console.log(urlArray)
// }

// module.exports = {validateRoute, listFiles, listFilesMd, checkLinks}
// module.exports = {typePath, listFiles }

// var mdFiles = files.filter(function(file) {
//     return path.extname(file).toLowerCase() === EXTENSION;
// });

// const verifyTypePath = (ruteAbsolute) => {
//     if (fs.lstatSync(ruteAbsolute).isDirectory()){
//         console.log(fs.readdirSync(ruteAbsolute));
//     }
//     else {
//         console.log(path.extname(ruteAbsolute));
//     }
// }

// const isDirectory = (ruteAbsolute) => {
//     return fs.lstatSync(ruteAbsolute).isDirectory();
// }

// const listFiles = (condition) => {
//   return condition;
// }
// // validar como si todo fuera archivo
// const validateDirectory =  
// const validateFile = stats.isFile();

// console.log(validateDirectory, validateFile)
// console.log(validateDirectory())
// fs.readFile('ruteAbsolute', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });
// module.exports.options = () => {
//     const [,, ...options] = process.argv;
//     return options;
// };

// const { argv } = require('process');
// var fullPath = path.join(path.dirname(process.argv[1]), remotePath);
// var filename = path.basename(__filename);
// console.log(filename);




