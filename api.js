const validateLink = require('./links.js');
const extractLink = require('./links.js');
//const filesLinkMd = require('./links.js');
const path = require('path');
const  fs = require('fs');



const evaluatePath = (ruta) => {
    const typePath = path.isAbsolute(ruta);
    return typePath;
};

const transformToAbsPath = (ruta) => {
    const pathAbsolute = path.resolve(ruta);
    return pathAbsolute;
};

const isFile = (rutaAbs) => {
    const fileExist = fs.statSync(rutaAbs).isFile();
    return fileExist;
};





const mdlinks=((path,options= {} )=>{

    let pathAbs="";
//reconocer el tipo de path
if(!path){
  return "no existe path";
}
else if(evaluatePath(path)){
    pathAbs=path;
} else{
    pathAbs=transformToAbsPath(path);
}
//extraer los links validados 
return new Promise((resolve,reject)=>{
    if(options.validate){
        resolve (validateLink(pathAbs));
    } 
    else {
        resolve ( extractLink(pathAbs));
    }

});
});


const  mostrar=mdlinks("pruebas\\general.md").then(result=>console.log(result));
console.log(mostrar);



//module.exports = mdLinks;

