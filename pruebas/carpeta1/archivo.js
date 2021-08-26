
/*/*
//que siginifica los ...arr


const array=[1,2,3,4];
console.log(...array);


const objeto={
    primero:"uno",
    segundo:"2",
    tercero:[1,2,3]
};

//console.log(objeto);


const nuevoObjeto={
    ...array,
    nuevo1: "policias",
    nuevo2: [1,2,3]
}

//console.log(nuevoObjeto);





//const usersArg=process.argv.slice(2);
//console.log(usersArg,49);

/*
if(usersArg.length===1){
    mdlinks(usersArg[0],{validate:false}).then(result=>console.log(result));

    console.log("*******************************************************")
}else{
    mdlinks(usersArg[0],{validate:true}).then(result=>console.log(result));
    console.log("--------------------------------------------------------------")
}

*/










/*

//promesas son un objeto que eventualmente vamos a resolver y eventualmente vamos a acceder 
//ventajas : componibles 
//eventualmente pueden resolver INMEDIATAMENNTE O EVENTUALMENTE  en un fututo 
//PUEDEN SER ENCADENABLES 

//PROMESA QUE SE DISUELVE INMEDIATAMENGTE 

const p1=Promise.resolve(1)

console.log(p1);

//llamara a la promesa .then

p1.then(x=>console.log(x))

//podemos decir que retorne otro valor 

p1.then(x=>x+5).then(x=>console.log(x));

// prodemos meter otra promesa dentro de otra promesa


p1.then(x=>x+5).then(x=>Promise.resolve(x+5)).then(x=>console.log(x));


// si dentro de la cadena algo falla 

p1.then(x=>x+5)
.then(x=>Promise.resolve(x+5))
.then(x=>Promise.reject("algo sucedio mal"))
.then(x=>console.log("esto no se va llamar"))
.catch(e=>console.log(e)) 


const delayed = x=> new Promise ((res,rej)=> 
setTimeout(()=>
res(x),900)
);


delayed(7).then(x=>{
    console.log(x)
    return delayed(x+7)
})
.then(x=>console.log(x))
.then(x=>Promise.reject("hubo error "))
.catch(e=>console.log(e))





const fileslinkMD = (rutaAbs) => {

    let mdFilesArray=[];
    //leer el directorio 
    let filesDir = readDirectory(rutaAbs);
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

*/

/*


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

const  mostrar=validateLink("D:\\PROGRAMACION\\LIM015-md-links\\pruebas");
//console.log(mostrar);

module.exports = validateLink;
module.exports=extractLink;
//module.exports=filesLinkMd;
*/



/* funcion validate  funcion.js

const validateLink= (objectData)=> {

  return new Promise ((resolve,reject)=>{

    objectData.forEach(link=>{
            //console.log(link);
      fetch(link.href)
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
        console.log(newObj);
        resolve (newObj);
      }
       }

      ).then(element=> resolve(element))
    .catch(()=> {
      const mystatus=" code error: 404";
      const mymessage= 'Fail';
      const newObj = {
        ...link,
        status: mystatus,
        message: mymessage,
      };
      resolve (newObj);
    });
  });
 
})
};
*/





