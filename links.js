const  path = require('path');
const fs = require('fs');
const marked = require('marked');
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


 //obtener los links de los archivos 
 

 const fileslinkMD = (rutaAbs) => {
    let mdFilesArray=[];
    //leer el directorio 
    let filesDir = fs.readdirSync(rutaAbs);

    filesDir.forEach(ele=> {

        let joinFile=path.join(rutaAbs,ele);

        console.log(joinFile);

        if (fs.statSync(joinFile).isFile() && path.extname(joinFile) === '.md') {

            mdFilesArray.push(joinFile);

        } else if ( fs.statSync(joinFile).isDirectory()){ 

            mdFilesArray=mdFilesArray.concat(fileslinkMD(joinFile));

        }
    });
    return mdFilesArray;
};

console.log(fileslinkMD("D:\\PROGRAMACION\\LIM015-md-links\\pruebas"))











  


/*const LinksOut= (rutaAbs)=> new Promise ((resolve,reject)=>{
       // si no es un archivo 
    if(!isFile(rutaAbs)){
        const pathArray= files(rutaAbs);
        resolve (allLinks(pathArray,rutaAbs));
        }

    })
*/


    

















//module.exports = LinksOut;
