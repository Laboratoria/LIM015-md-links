module.exports = () => {
}


const path = require('path');
const  fs = require('fs');


//evaluar si la ruta es absoluta o relatuiva 

function absolutePath(ruta){

const resultPath=path.isAbsolute(ruta);
  return  resultPath;

}

//convertir mi ruta relativa absoluta 

function convertedPath(ruta){

  const convertedpath=path.resolve(ruta);
    return  convertedpath;
}


// saber si es un archivo o directorio 

function fileExists(ruta){ 

  try { 

      if(fs.statSync(ruta).isFile()) {
        return "es archivo";
       }
        
      else if  (fs.statSync(ruta).isDirectory()) {
        return "es directorio";
       }
       
    } 
    catch (err)
    {
        return "no existe";
    }    
     
      }


 //convertir un directorio en un archivo 


 let data=fs.readFileSync("texto.txt","utf-8");
 console.log(data);





//console.log(absolutePath("D:\\PROGRAMACION\\LIM015-md-links\\data.txt"));
//console.log(convertedPath("function.js"));
//console.log(fileExists("D:\\PROGRAMACION\\LIM015-md-links\\data.txt"));








