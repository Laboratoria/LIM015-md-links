const  {linkValidate,extractLink}= require('./links.js');

const  {brokenlinks,totalUniquelinks}= require('./stat.js');


//const filesLinkMd = require('./links.js');
const path = require('path');
const { log } = require('console');


//evaluar que tipo de ruta es 

const evaluatePath = (ruta) => {
    const typePath = path.isAbsolute(ruta);
    return typePath;
};

//transformar a ruta absoluta 
const transformToAbsPath = (ruta) => {
    const pathAbsolute = path.resolve(ruta);
    return pathAbsolute;
    
};




const mdlinks=(path,options= { })=>{
    let pathAbs="";
    //reconocer el tipo de path

    if(evaluatePath(path)){
        pathAbs=path;
    } else{
        pathAbs=transformToAbsPath(path)
        
        
    }
    //console.log(pathAbs);
    
    //extraer los links validados 
    return new Promise((resolve,reject)=>{

      if(options && options.validate===true){
        console.log("validacion");
        const objectData=extractLink(pathAbs);
        //console.log(objectData);
        linkValidate(objectData).then(result=>console.log(result)).catch(error=>console.log(error));

      }else if(options.stats===true){
        resolve(totalUniquelinks(pathAbs));

      }else if(options.statAndValid===true){
        brokenlinks(pathAbs).then(result=>console.log(result)).catch(error=>console.log(error));

      }else if((pathAbs===[])){
        reject("NO EXISTE RUTA y/O NO HAY LINKS DENTRO DEL ARCHIVO MD")
      }else{
        console.log("sin validacion");
        resolve (extractLink(pathAbs));
        
      }
      
});
};



//D:\PROGRAMACION\LIM015-md-links\pruebas\carpeta2\carpeta2.md
//D:\PROGRAMACION\LIM015-md-links\pruebas\carpeta2\carpeta2.md


//mdlinks("pruebas\\carpeta2\\carpeta2.md").then(result=>console.log({result}));

//mdlinks("pruebas\\general.md").then(result=>console.log({result})).catch(error=>console-log(error));


//ruta absoluta 


//mdlinks("pruebas\\carpeta2\\carpeta2.md",{ validate: true }).then(result=>console.log(result)).catch(error=>console.log(error));

//mdlinks("D:\\PROGRAMACION\\LIM015-md-links\\pruebas",{ stats: true }).then(result=>console.log(result)).catch(error=>console.log(error));

//mdlinks("pruebas\\carpeta2\\carpeta2.md",{ statAndValid: true }).then(result=>console.log(result)).catch(error=>console.log(error));


module.exports = {mdlinks};