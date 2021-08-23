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
const pruebaExt = './prueba/text.txt';
const extensionType = path.extname(pruebaExt);
//console.log(`La extension es de tipo: ${extensionType}`);

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
//console.log(joinRuta);