const fs = require('fs');
const path = require('path');
const marked = require('marked');

// *Confirmar si la ruta existe*

const pathExist = isAPath => (fs.existsSync(isAPath));

// console.log(pathExist('src/indexs.js'));
// console.log(pathExist('src/index.js'));


// *Comprobar si la ruta un directorio*

const isADirectory = isAPath => fs.lstatSync(isAPath).isDirectory();

// console.log(isADirectory('src'));
// console.log(isADirectory('src/index.js'));

// *Comprobar si la ruta un archivo*

const isAFile = isAPath => fs.lstatSync(isAPath).isFile();

// *Verificar si es una ruta absoluta y resolverlo*

const isAbsolute = isAPath => (path.isAbsolute(isAPath) ? isAPath : path.resolve(isAPath))


// console.log(path.isAbsolute('/Pruebaa/archivo.md'));

// *Para leer un archivo de un directorio*

const readAllFiles = (isAPath) => fs.readFileSync(isAPath, 'utf8');

// console.log(fs.readFileSync('./Pruebaa/archivo.md', 'utf8'));

// *Para verificar que la extension del archivo sea md*

const isMd = (isAPath) => path.extname(isAPath) === '.md'

// console.log(isMd('./Pruebaa/archivo.md'));

// path.extname('index.js');

// console.log(path.extname('./Pruebaa/text.txt'));

// console.log(fs.readdirSync('./Pruebaa', 'utf8'));



// *Funcion para extraer archivos md y guardarlo en un array*

const searchFileMd = (file) => {
    const route = isAbsolute(file);
    let arrayFileMd = [];

    if(isAFile(route)) {
        if(isMd(route)) {
            arrayFileMd.push(route)
        }
    } else {
        const listOfFiles = fs.readdirSync(route);
        listOfFiles.forEach((files) => {
            arrayFileMd = arrayFileMd.concat(searchFileMd(path.join(route, files)))
        });
    }

    return arrayFileMd;
}

// console.log(searchFileMd('./Pruebaa'));

// *Funcion para recorrer los links de los archivos md*

const readLinksMd = (file) => {
    const arrayLinksMd = [];
    const arrFile = searchFileMd(file);
    arrFile.forEach((pathFile) => {
        const readFileMd = readAllFiles(pathFile);
        const renderer = new marked.Renderer();
        renderer.link = (url, texto, urlText) => {
            arrayLinksMd.push(
                {
                    href: url,
                    text: urlText.substring(0, 50),
                    pathFile: pathFile
                }
            );
        };
        marked(readFileMd, { renderer});
    });
    return arrayLinksMd;
};

console.log(readLinksMd('./Pruebaa/'));

module.exports = {
    searchFileMd,
    isAbsolute
}