const  {linkValidate,extractLink}= require('./links.js');

const  {brokenlinks,totalUniquelinks}= require('./stat.js');


//const filesLinkMd = require('./links.js');
const path = require('path');
const  fs = require('fs');



const evaluatePath = (ruta) => {
    const typePath = path.isAbsolute(ruta);
    return typePath;
};

const transformToAbsPath = (ruta) => {
    const pathAbsolute = path.resolve(ruta).split();
    return pathAbsolute[0];
    
};


const mdlinks=(path,options= { })=>{
    let pathAbs="";
    //reconocer el tipo de path

    if(evaluatePath(path)){
        pathAbs=path;
    } else{
        pathAbs=transformToAbsPath(path);
    }
    //extraer los links validados 
    return new Promise((resolve,reject)=>{

      if(options && options.validate===true){
          console.log("validacion");
          //const objectData= [{href: 'https://es.wikipedia.org/wiki/Markdown', text: 'Markdown', route: 'D:\PROGRAMACION\LIM015-md-links\pruebas\carpeta1\carpeta1.md'}]
        const objectData=extractLink(pathAbs);
        //console.log(objectData);
        linkValidate(objectData).then(result=>console.log(result)).catch(error=>console.log(error));

      }else if(options.stats===true){
        resolve(totalUniquelinks(pathAbs));

      }else if(options.statAndValid===true){
        brokenlinks(pathAbs).then(result=>console.log(result));
      }else{
        console.log("sin validacion");
        resolve (extractLink(pathAbs));
      }
});
};




//mdlinks("D:\\PROGRAMACION\\LIM015-md-links\\pruebas").then(result=>console.log({result}));

//mdlinks("D:\\PROGRAMACION\\LIM015-md-links\\pruebas",{ validate: true }).then(result=>console.log(result)).catch(error=>console.log(error));

//mdlinks("D:\\PROGRAMACION\\LIM015-md-links\\pruebas",{ stats: true }).then(result=>console.log(result)).catch(error=>console.log(error));

//mdlinks("D:\\PROGRAMACION\\LIM015-md-links\\pruebas",{ statAndValid: true }).then(result=>console.log(result)).catch(error=>console.log(error));



module.exports = {mdlinks};