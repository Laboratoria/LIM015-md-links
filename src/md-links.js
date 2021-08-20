/*El modulo fs es un modulo nativo de node que nos permite interactuar con los archivos del sistema
 ya que todas las operaciones de acceso de archivo estan englobadas en fs*/
 /*el require es un simil del import, require es una palabra clave en nodejs se usa para importar algo de la base de node*/
 const fs = require("fs");
 const path = require("path");
 const rutadelUsuario = process.argv[2];
 //Process es un objeto global de node // 
 //process.argv es una propiedad que devuelve un arreglo con lo que escribes (puede ser lo) en la terminal 
 //El metodo .slice copiaba una parte del arreglo segun lo que le pidamos que copie por su indice 
 
 /*para verificar si el archivo existe en la terminal powershel o bash, poner lo siguiente node src/index.js copia ruta relativa o absoluta y darle enter*/
 
 
 //Verificando si existe una ruta de archivo o directorio/carpeta con fs.existsSync()//
  const validarRuta = (filePath)=> fs.existsSync(filePath)
 
 //console.log(validarruta(rutadelUsuario));
 
  //verifico si es ruta absoluta con el metodo: path.resolve(ruta)===(ruta) //
  const rutaAbsolut= (ruta)=> path.resolve(ruta)===(ruta)
  //console.log(rutaAbsolut(rutadelUsuario))

  //Verifico si es directorio/carpeta con el metodo: fs.statSync().isDirectory() //
 
 const esDirectorio=(ruta)=> fs.statSync(ruta).isDirectory()
 //console.log(esDirectorio(rutadelUsuario));


 //Convierto a ruta absoluta con el metodo: path.resolve() //
 const convertiraAbsolut= (ruta)=> path.resolve(ruta)
     //console.log(convertiraAbsolut(rutadelUsuario))

  
 //Verificando si es archivo con el metodo: fs.statSync().isFile()//
 const isArchivo=(ruta)=> fs.statSync(ruta).isFile();
 //console.log(verArchivo(rutadelUsuario),rutadelUsuario);

//Verificando si el archivo es md con el metodo: path.extname() //
const esArchivoMd =(filePath)=> path.extname(filePath)===".md"

    //console.log(esArchivoMd(rutadelUsuario));



module.exports={
    
    validarRuta,
    rutaAbsolut,
    esDirectorio,
    convertiraAbsolut,
    isArchivo,
    esArchivoMd,

}