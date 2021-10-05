const {
    detectPathExists,
    convertPathToAbsolute,
    detectDirectory,
    openDirectory,
    filterMdFile,
    getURLs
} = require('./index.js');

const mdLinks = (path, option = {validate:false}) => {
    return new Promise((resolve, reject) => {
        const pathToAbsolute = convertPathToAbsolute(path)
        let arrayFilesMD;
        if(detectPathExists(pathToAbsolute)) {
            if (detectDirectory(pathToAbsolute)) {
                const arrayfiles = openDirectory(pathToAbsolute);
                arrayFilesMD = filterMdFile(arrayfiles);
            } else {
                arrayFilesMD = filterMdFile([pathToAbsolute]);
            }
            resolve(getURLs(arrayFilesMD));
        } else {
            reject('The input path does not exist');
        }
    })
}

mdLinks('./prueba/', {validate:false})
.then(response =>{
    console.log(response);
})
.catch (error => {
    console.log(error)
});