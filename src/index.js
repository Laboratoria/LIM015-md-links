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

//RUTA EXISTE////

/*Verificando si existe una ruta de archivo o directorio/carpeta con fs.existsSync()*/
 function validarruta(filePath){
if(fs.existsSync(filePath)){
    return "El archivo EXISTE!";
 } else /*if(fs.existsSync(filePath)===false)*/{
    return "El archivo NO EXISTE!";
 }
}
console.log(validarruta(rutadelUsuario));


/*Convirtiendo a ruta absoluta con el metodo: path.resolve() */
const rutaAbsolut= (ruta)=> path.resolve(ruta)
    console.log(rutaAbsolut(rutadelUsuario, "convertido a ruta absoluta"))


/*Verificando si es directorio/carpeta con el metodo: fs.statSync().isDirectory() */

const verDirectorio=(ruta)=> fs.statSync(ruta).isDirectory()
    console.log(verDirectorio(rutadelUsuario));

 
/*Verificando si es archivo con el metodo: fs.statSync().isFile()*/
const verArchivo=(ruta)=> fs.statSync(ruta).isFile()
console.log(verArchivo(rutadelUsuario));


/*Viendo si el archivo es md con el metodo: path.extname() */
const esArchivoMd =(filePath)=> path.extname(filePath)
    console.log(esArchivoMd(rutadelUsuario));

    
/*fs.readdirSync(paths)*/
module.exports = {
   
    validarruta,
    esArchivoMd
    
}
