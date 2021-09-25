const fs = require('fs');
const path = require('path');
const marked = require('marked');
const fetch = require('node-fetch');

// *Confirmar si la ruta existe*

const pathExist = (isAPath) => fs.existsSync(isAPath) 

// *Comprobar si la ruta un archivo*

const isAFile = isAPath => fs.lstatSync(isAPath).isFile();

// *Verificar si es una ruta absoluta y resolverlo*

const isAbsolute = isAPath => (path.isAbsolute(isAPath) ? isAPath : path.resolve(isAPath))

// *Para leer un archivo de un directorio*

const readAllFiles = (isAPath) => fs.readFileSync(isAPath, 'utf8');

// *Para verificar que la extension del archivo sea md*

const isMd = (isAPath) => path.extname(isAPath) === '.md'


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
    // console.log(file);
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

/*eslint prefer-spread: "warning"*/

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

    // validateLink('https://docs.npmjs.com/cli/install').then(resolve => {
    //     console.log(resolve);
    //   }).catch(reject => console.log(reject));

// console.log(validateLink('https://curriculum.laboratoria.la/es/topics/javascript/04-arrays'));

// console.log(process.cwd())  (devuelve el directorio de trabajo actual)

// STATS

// Funcion de enlaces unicos
const uniqueLink = (arrayLink) => {
    const uniquesLinks = new Set(arrayLink.map((link) => link.href));
    const unique = `Unique: ${uniquesLinks.size}`
    return unique;
};

// Funcion de enlaces rotos
const brokenLink = (arrayLink) => {
    const brokenLinks = arrayLink.filter((link) => link.statusText === 'FAIL')
    const stats = `Broken: ${brokenLinks.length}`;
    return stats;
};

const totalLink  = (arrayLink) => {
    const totalElementosArray = arrayLink.map(link => link.href);
    const total = `Total: ${totalElementosArray.length}`
    return total;
}

module.exports = {
    searchFileMd,  /*ya esta el test */
    isAbsolute,    /*ya esta el test */
    pathExist,     /*ya esta el test */
    isAFile,       /*ya esta el test */
    readAllFiles,  /*ya esta el test */
    isMd,          /*ya esta el test */
    readLinksMd,   /*ya esta el test */
    validateLink,  /*ya esta el test */
    uniqueLink,    /*ya esta el test */
    brokenLink,    /*ya esta el test */
    totalLink      /*ya esta el test */
}