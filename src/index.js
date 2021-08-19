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
fs.readdirSync(path)




const {validarruta}= require("./md-links.js");

const {esArchivoMd}=require("./md-links.js");
//Leyendo archivos//
const respuesta = esArchivoMd(path.readFileSync(file, 'leelo'));
console.log(respuesta);

    
/*fs.readdirSync(paths)*/
module.exports = {
   
    respuesta,
    
    
    
}
