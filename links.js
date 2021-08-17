const  path = require('path');
const fs = require('fs');
const marked = require('marked');
const { rejects } = require('assert');
const { resolve } = require('dns');
//const jsdom = require('jsdom');
//const { JSDOM } = jsdom;




// si existe ruta 
const isFile = (rutaAbs) => {
    const fileExist = fs.statSync(rutaAbs).isFile();
    return fileExist;
};

  


//abrir directorio

  const readDirectory=(ruta)=>{ 
      const readDir=fs.readdirSync(ruta,'utf8');
    return readDir;
   } 



//convertir un archivo md a un contenido  html   
const mdToHTML = (contenido) => {
    const textHtml = marked(contenido);
    return textHtml;
  };



 //obtener los links de los archivos dentro de un directorio
 
const filesLinkMd =(rutaAbs)=> {
       let arrayPaths =[];
       let filesDirectory=readDirectory(rutaAbs);
       filesDirectory.forEach (fileOrDirectory=> {
        let pathJoin=path.join(rutaAbs,fileOrDirectory) ;

        if(fs.statSync(pathJoin).isFile() && path.extname(pathJoin)==='.md') {
            arrayPaths.push(pathJoin)
           
        } else if (fs.statSync(pathJoin).isDirectory()){
        arrayPaths =arrayPaths.concat(filesLinkMd(pathJoin));
            
        }         
    })
    return  arrayPaths;
}


let mor=filesLinkMd("D:\\PROGRAMACION\\LIM015-md-links\\pruebas\\carpeta1")
console.log(mor);
console.log(showDetails(mor));



//mostrar finalmnete el array 



// verificar dentro del documento 

 













// salida de datos mediante promesa .

const LinksOut= (rutaAbs)=> new Promise ((resolve,reject)=>{
       // si no es un archivo 
    if(!isFile(rutaAbs)){

        const pathArray= filesLinkMd (rutaAbs);
                resolve (allLinks(pathArray,rutaAbs));

    }else if (path.extname(rutaAbs) ==='.md') {
        const PathAbsoluteMD=[rutaAbs];
        resolve (allLinks(PathAbsoluteMD,rutaAbs));
    }

    })






module.exports = LinksOut;
