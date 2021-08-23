const  path = require('path');
const fs = require('fs');
const marked = require('marked');
const { rejects } = require('assert');
const { resolve } = require('dns');
const fetch = require('node-fetch')


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




 //obtener los path  de los archivos dentro de un directorio
 
const filesLinkMd =(rutaAbs)=> {

let arrayPaths =[];

if(isFile(rutaAbs) && path.extname(rutaAbs)==='.md'){
  arrayPaths=rutaAbs;
  return arrayPaths;
}

else if(fs.statSync(rutaAbs).isDirectory()) {

  let filesDirectory=readDirectory(rutaAbs);
  filesDirectory.forEach (fileOrDirectory=> {

        let pathJoin=path.join(rutaAbs,fileOrDirectory) ;

        if(isFile(pathJoin) && path.extname(pathJoin)==='.md') {
            arrayPaths.push(pathJoin)
           
        } else if (fs.statSync(pathJoin).isDirectory()){
        arrayPaths =arrayPaths.concat(filesLinkMd(pathJoin));
            
        }       
    })
    return  arrayPaths;
  }
 
  else {
  return "error , no existe archivo md";
}
}




//function para extraer los links totales dentro de los archivos  MD 

const extractLink =(rutaAbs)=> { 

    let objLinks=[];
    const dataPath=filesLinkMd(rutaAbs);
    //console.log(dataPath);
    dataPath.forEach((mdRoute) =>{ 
    const fileContentArr = fs.readFileSync(mdRoute, 'utf-8');

    const regExLinks = /\[([\w\s\d.()]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
    const regExHref = /\((http|https).+?\)/g;
    const regExText = /\[.+?\]/g;

    const  linksArr = fileContentArr.match(regExLinks);

    //console.log(linksArr);

    if (linksArr) {
          linksArr.forEach((link)=> {
          //console.log("estoy aqui");
          const txtHref = link.match(regExHref);
          const txtText = link.match(regExText);
          return ( objLinks.push({
            href: txtHref.join().slice(1, -1),
            text: txtText.join().slice(1, -1),
            route: mdRoute
          }));
          //console.log(objLinks);
        });
    
    }
    else{
      return "no existe ruta "
    }
    
  });
  return objLinks;
};




//obtener el arreglo de links con la opcion validate 

const validateLink= (rutaAbs)=> {
    const objectData=extractLink(rutaAbs);

    objectData.forEach(link=>{
      //console.log(link);

     return fetch(link.href)
     .then(element=>{
      if(element.status >= 200 && element.status < 400) { 
        const mystatus= element.status;
        //console.log(mystatus);
        const mymessage=element.statusText;
       // console.log(mymessage);
        const newObj = {
          ...link,
          status: mystatus,
          message: mymessage,
        };
        return newObj;
      }}
      
    ).then(result=>console.log(result))
    .catch(()=> {
      const mystatus=" code error: 404";
      const mymessage= 'Fail';
      const newObj = {
        ...link,
        status: mystatus,
        message: mymessage,
      };
      return newObj;
    }).catch(e=>console.log(e))
       
    });


    //const datalinks=objectData.map(link=>link.href);

    //console.log(datalinks);

};

//const  mostrar=validateLink("D:\\PROGRAMACION\\LIM015-md-links\\pruebas");
//console.log(mostrar);

module.exports = validateLink;
module.exports=extractLink;
//module.exports=filesLinkMd;





