//----***---***-- (1). Leyendo un archivo-----****---*-----***//
const fs = require('fs');
const path = require('path');

/*const readingFile = fs.readFileSync('./prueba/carpeta/readme.md','utf8'); 
    console.log(readingFile);*/
const readingFile = './prueba/firstFile/readme.md';
fs.readFile(readingFile, 'utf8', function (err,data) {
      if (err) {
       // console.log('Error al leer el File');
      } else{
      //console.log(`leyendo: ${data}`);
      }
    });
//----***---***-- (2). Averiguar la extención del archivo-----****---*-----***//
const pruebaExt = process.argv[2];
//const extensionType = path.extname(pruebaExt);
//console.log(`La extension es de tipo: ${extensionType}`);
// ---*-*-*--*-* CONSOLA *-*-*-*-*-* ---/
/* node .\prueba.js .\text.txt
La extension es de tipo: .txt  */

//-----***-****---**--(3). Obtén el contenido de un directorio-----------//
 
fs.readdir('./prueba',{ withFileTypes: true }, (err, files)=>{
  //console.log('El contenido del directorio:')
  if (err){
    console.log('Error de lectura en el directorio')
    //console.log(err.message)
  } else{
  files.forEach(file => {
      //console.log(file)
    });
  }
});

 const directory = "prueba";
 const directoryContent = fs.readdirSync(directory)
 //console.log(directoryContent);
 //console.log('contenido de directorio en :')
 directoryContent.forEach(file => {
  //console.log(file);
  }); 

  //-----***-****---**--(4). Uniendo dos rutas---------------//
const joinRuta = path.join(__dirname,"prueba", "firstFile","ReadmePersonal.md");
console.log(joinRuta);
/* ---*-*-*--*-* CONSOLA *-*-*-*-*-* ---/
C:\Users\nadia\Documents\GitHub\MDLink\LIM015-md-links2\prueba\firstFile\ReadmePersonal.md */
pathprueba = "prueba";
file = "firstDirectory"
const joinPath = path.join(pathprueba,file)
console.log(joinPath);


const mdLinks = (path0) => {
  //try{
    if (pathExistFun(path0)){
       // console.log ('path existe')
        if (pathIsAbsolute(path0)){
           // console.log ('path exist and it is absolute')
            if (pathIsFile(path0) ){
              //console.log('path exist, it is absolute and is a File')
              if(fileExtention(path0) ){
              console.log('path exist, it is absolute, is a markDown File ')

              } else{
                console.log('path exist, it is absolute, is a File but is not a markdown')
              }
            }else{
              console.log('path is a directory')
            }
        }else   {
         //console.log ('path is not absolute')
         const pathRelToAbs = pathResolveAbsolute(path0);
          if(IsFile(pathRelToAbs)){
            //console.log('path exist, it to convert an absolute path and is a File')
            if(fileExtention(pathRelToAbs)){
              console.log('path exist, it to convert an absolute path, is a markDown File')
            }else{
              console.log('path exist, it to convert an absolute path, but is NOT a markDown File')
            }

          }else { //if ((IsFile(pathRelToAbs)== false))
            console.log('path exist, it to convert an absolute path and is a Directory')
          console.log( pathIsDirectory(pathRelToAbs))

          }
      }
    } else {
        console.log(`ERROR:${path0} -DOES NOT EXIST`)
    }
     
  /*  }catch (error){
      console.log(error.message);
  }*/

}
mdLinks(pathTest);