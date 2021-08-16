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

/*
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
*/




 //recorrer un directorio los archivos dentro directorio 

 function readDirectory(ruta){ 
  
  let readDir=fs.readdirSync(ruta);
  return readDir;
 } 
 



 // evualuando   y juntando todas las funciones 

 /*const mdLinks=(ruta,options={}) => {

   let arrayLinks;

   if (absolutePath(ruta)) {
     return arrayLinks=ruta;
      
   } else {
    arrayLinks=convertedPath(ruta);
   };

return new Promise ( resolve, reject)=> {
  if(options.validate){
    
  }
}

 }
 */





 console.log(mdLinks("function.js"));






















 //let dir=readDirectory("D:\\PROGRAMACION\\LIM015-md-links\\pruebas");

 //console.log(dir);

 //obtener la extension del archivo 

 //console.log(()));

//Hola Natalia, hay un metodo para ver la extension. Path.extname  puedes buscar

//console.log(path.extname('D:\\PROGRAMACION\\LIM015-md-links\\data.txt'));

//console.log(absolutePath("D:\\PROGRAMACION\\LIM015-md-links\\data.txt"));
//console.log(convertedPath("function.js"));
//console.log(fileExists("D:\\PROGRAMACION\\LIM015-md-links"));
//console.log(readDirectory("D:\\PROGRAMACION\\LIM015-md-links"));






console.log(getDirectory("D:\\PROGRAMACION\\LIM015-md-links\\pruebas"));


