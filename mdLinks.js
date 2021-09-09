/* Index.js exporta una función  mdlinks.js
El primer paso es leer un parámetro desde la terminal Node index.js /carpetA/ (“/carpeta")*/
//fs modulo, que permite acceder a las funciones para leer o escribir data del file sistem, y retorna un objeto.
/*const mdLinks = () => {
} */

/*const mdLinks = require('../prueba/mdLinks'); */

const { pathExistFun, pathIsAbsolute, pathIsFile, fileIsMd, getLinks } = require('./functions')

/* const fs = require('fs');
const path = require('path'); */

//pathUn = "/Users/nadia/Documents/GitHub/MDLink/PracticaNode";
pathTest = process.argv[2];
pathSpec = 'text.txt';


const mdLinks = (path0) => {
  //try{
    if (pathExistFun(path0)){ // == true
      const onlyMdFiles =  fileIsMd(pathIsAbsolute(path0))
      if(onlyMdFiles !== ''){
         // return onlyMdFiles
         onlyMdFiles.forEach((element) => {
           return getLinks(pathResolveAbsolute(element))
         });
      }else{
        console.log(`PATH IS NOT A MARKDOWN FILE`)
      }
        
    } else {
        console.log(`ERROR:${path0} -DOES NOT EXIST`)
    }
     
  /*  }catch (error){
      console.log(error.message);
  }*/

}
console.log(mdLinks(pathTest));
mdLinks(pathTest);

const mdLinks2 = (path0) => {
    const promise = new Promise((resolve, reject) => {
      if (pathExistFun(path0)){
        return getLinks(fileIsMd(pathIsAbsolute(path0))) // == true
      const links = getLinks(path0);
      resolve(links);
      }else{
          reject (`ERROR:${path0} -DOES NOT EXIST`)
      }
         
       
       
    });
    return promise;
} 
 /*  console.log(mdLinks2(pathTest));
  mdLinks2(pathTest); */

  
 