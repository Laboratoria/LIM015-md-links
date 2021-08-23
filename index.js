/* Index.js exporta una función  mdlinks.js
El primer paso es leer un parámetro desde la terminal Node index.js /carpetA/ (“/carpeta")*/
//fs modulo, que permite acceder a las funciones para leer o escribir data del file sistem, y retorna un objeto.
/*const mdLinks = () => {
}
module.exports =  {
  mdLinks
};*/
/*const mdLinks = require('../prueba/mdLinks'); */
const{ fileToRead, directoyToRead } = require('./functions')

const fs = require('fs');
const path = require('path');

//pathUn = "/Users/nadia/Documents/GitHub/MDLink/PracticaNode";
pathUno = process.argv[2]

function pathExist2 () {
  try{
    const pathExist = fs.existsSync(pathUno);
    //console.log('pathExist');
      if (pathExist == true ) {
          console.log('pathExist2 exists')
      } else {
          console.log('pathExist2 does not exist') // se acabo el ciclo
      }
  } catch (error){
      console.log(error.message);
  }

}
//pathExist2();

function absolutePath () {
  try{
   
    if (pathExist2() === 'pathExist2 exists'  ){
      console.log('puedes continuar')
    } else {
      console.log('we cant find the path')
    }
  } catch(e){
    console.log(e.message);
  }
}
//absolutePath()

function readingPath () {
    try {
        fs.stat(pathUno, (err, tryFile) => {

                if(tryFile.isFile() == true){
                    console.log( `pathUno is file: ${tryFile.isFile()}`);
                    console.log(fileToRead(pathUno));

                }else{ //if(tryFile.isFile() == false){
                    console.log('pathUno is directory: ' + tryFile.isDirectory());
                    console.log(directoyToRead (pathUno));
                //}else {
               //  console.log(err.message);
            }

        });
    }
    catch(err){
        console.log(err.message);
    }
}
readingPath()



/*function readfile (path, response) {
  fs.readFile(path, function (error,data){
  if (error){
response.writeHead(404);
response.writeHead('File not found');
  } else{
    response.writeHead(data);
  }
 response.end();
});
}*/

  
  











