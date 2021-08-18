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




//function para extraer los links dentro de los archivos  MD 

const extractLink =(rutaAbs)=> new Promise((resolve, reject)=> {
    let objLinks=[];
    const dataPath=filesLinkMd(rutaAbs);
    console.log(dataPath);

    dataPath.forEach((mdRoute) =>{ 

    const fileContentArr = fs.readFileSync(mdRoute, 'utf-8');

    const regExLinks = /\[([\w\s\d.()]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
    const regExHref = /\((http|https).+?\)/g;
    const regExText = /\[.+?\]/g;

    const  linksArr = fileContentArr.match(regExLinks);
    console.log(linksArr);

    if (linksArr) {
        linksArr.forEach((link)=> {
            console.log("estoy aqui");
          const txtHref = link.match(regExHref);
          const txtText = link.match(regExText);
          objLinks.push({
            route: mdRoute,
            href: txtHref.join().slice(1, -1),
            text: txtText.join().slice(1, -1)
          });
        });
      }
    });
    resolve(objLinks);

    if (!dataPath) {
      reject({
        error: 'la ruta no es valida'
      });
    }
  });


    
const  mor=extractLink("D:\\PROGRAMACION\\LIM015-md-links\\pruebas");
console.log(mor);



module.exports = extractLink;
