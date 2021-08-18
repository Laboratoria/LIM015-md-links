/*El modulo fs es un modulo nativo de node que nos permite interactuar con los archivos del sistema
 ya que todas las operaciones de acceso de archivo estan englobadas en fs*/
const fs = require("fs");
const path = require("path");
const rutadelUsuario = process.argv[2];
/*el require es un simil del import, require es una palabra clave en nodejs se usa para importar algo de la base de node*/

/*para verificar si el archivo existe en la terminal powershel o bash, poner lo siguiente node src/cli.js copia ruta relativa o absoluta y darle enter*/

//RUTA EXISTE////

/*const rutaextname=(filePath) => path.extname(filePath) */
//con existsSync verificamos si existe una ruta de archivo o directorio//
 function validarruta(filePath){
if(fs.existsSync(filePath)){
    return "El archivo EXISTE!";
 } else if(fs.existsSync(filePath)===false){
    return "El archivo NO EXISTE!";
    
 }
}
console.log(validarruta(rutadelUsuario));
/*Convirtiendo a ruta absoluta */
const rutaAbsolut= (ruta)=> path.resolve(ruta)

    
console.log(rutaAbsolut(rutadelUsuario, "convertido a ruta absoluta"))

const verDirectorio=(ruta)=> fs.statSync(ruta).isDirectory()

console.log(verDirectorio(rutadelUsuario));


     /*fs.readdirSync(paths)
*/
const verArchivo=(ruta)=> fs.statSync(ruta).isFile()
console.log(verArchivo(rutadelUsuario));
     
const esArchivoMd =(filePath)=> path.extname(filePath)
            
    
    console.log(esArchivoMd(rutadelUsuario));
    

module.exports = {
   
    validarruta,
    esArchivoMd
    
}
