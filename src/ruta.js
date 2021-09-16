const fs = require('fs');
const path = require('path');
const marked = require('marked');
const fetch = require('node-fetch');

// *Confirmar si la ruta existe*

const pathExist = (isAPath) => fs.existsSync(isAPath) 
  //? path.normalize(path.resolve(isAPath)) : 'La ruta no existe';

// console.log(pathExist('src/indexs.js'));
// console.log(pathExist('src/index.js'));

// *Comprobar si la ruta un directorio*

const isADirectory = isAPath => fs.lstatSync(isAPath).isDirectory();

// console.log(isADirectory('src'));
// console.log(isADirectory('src/index.js'));

// *Comprobar si la ruta un archivo*

const isAFile = isAPath => fs.lstatSync(isAPath).isFile();

// console.log(isAFile('Pruebaa/archivo.md'));
// console.log(isAFile('Pruebaa'));

// *Verificar si es una ruta absoluta y resolverlo*

const isAbsolute = isAPath => (path.isAbsolute(isAPath) ? isAPath : path.resolve(isAPath))

// console.log(isAbsolute('Pruebaa'));

// *Para leer un archivo de un directorio*

const readAllFiles = (isAPath) => fs.readFileSync(isAPath, 'utf8');

// console.log(fs.readFileSync('./Pruebaa/archivo.md', 'utf8'));

// *Para verificar que la extension del archivo sea md*

const isMd = (isAPath) => path.extname(isAPath) === '.md'

// console.log(isMd('./Pruebaa/archivo.md'));
// console.log(isMd('./Pruebaa/text.txt'));

// path.extname('index.js');

// console.log(path.extname('./Pruebaa/text.txt'));

// console.log(fs.readdirSync('Pruebaa', 'utf8'));


// *Funcion para extraer archivos md y guardarlo en un array*

const searchFileMd = (route) => {
    // const route = isAbsolute(file);
    // console.log(route);
    let arrayFileMd = [];

    if( isAFile(route)) {
        if(isMd(route)) {
            arrayFileMd.push(route)
        }
    } else {
        const listOfFiles = fs.readdirSync(route);
        listOfFiles.forEach((file) => {
            const pathFile = path.join(route, file);
            arrayFileMd = arrayFileMd.concat(searchFileMd(pathFile));
            // console.log(files);
            // console.log(route);
        });
    }
    return arrayFileMd;
}

// console.log(searchFileMd('./Pruebaa'));

// *Funcion para recorrer los links de los archivos md*

const readLinksMd = (file) => {
    console.log(file);
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

// console.log(readLinksMd('./Pruebaa/'));

const validateLink = (links) => fetch(links.href)
    // const readMdLinks = readLinksMd(route);
    // const promiseArray = readMdLinks.map((links) => fetch(links.href)
    .then((response) => {
        if(response.status >= 200 && response.status < 400) {
            return {
                ...links,
                status: response.status,
                statusText: response.statusText
            };
        }
        return {
            ...links,
            status: response.status,
            statusText: 'FAIL'
        };
    }) 
    .catch(() => {
        return {
            ...links,
            status: 'ERR',
            statusText: 'FAIL'
        };                                                                      
    });

    // validateLink('https://curriculum.laboratoria.la/es/topics/javascript/04-arrays').then(resolve => {
    //     console.log(resolve);
    //   }).catch(reject => console.log(reject));

// console.log(validateLink('https://curriculum.laboratoria.la/es/topics/javascript/04-arrays'));

// console.log(process.cwd())  (devuelve el directorio de trabajo actual)

module.exports = {
    searchFileMd,
    isAbsolute,    /*ya esta el test */
    pathExist,     /*ya esta el test */
    isAFile,       /*ya esta el test */
    readAllFiles,  /*ya esta el test */
    isMd,          /*ya esta el test */
    readLinksMd,
    validateLink
}