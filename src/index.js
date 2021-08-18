/*El modulo fs es un modulo nativo de node que nos permite interactuar con los archivos del sistema ya que todas las operaciones de acceso de archivo estan englobadas en fs*/
const fs = require("fs");

/*el require es un simil del import, require es una palabra clave en nodejs se usa para importar algo de la base de node*/

/*para verificar si el archivo existe en la terminal powershel o bash, poner lo siguiente node src/cli.js copia ruta relativa o absoluta y darle enter*/

//RUTA EXISTE////

/*const rutaextname=(filePath) => path.extname(filePath) */
//con existsSync verificamos si existe una ruta de archivo o directorio//
 function validarruta(filePath){
if(fs.existsSync(filePath)){
    console.log("El archivo EXISTE!", filePath);
    }else{
    console.log("El archivo NO EXISTE!", filePath);
    }

}
 function esArchivoMd(file){
    
        if(path.extname(file) === '.md' || path.extname(file) === '.MD' || path.extname(file) === '.Md' || path.extname(file) === '.mD'){
            return file, "si es md";
        } else{
            return file, "no es md";
        }
    }
    
     
console.log(file);
     
    

module.exports = {
   
    validarruta,
    esArchivoMd
    
}
