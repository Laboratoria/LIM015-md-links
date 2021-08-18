const {validarruta}= require("./index.js");

const {esArchivoMd}=require("./index.js");

//convirtiendo a ruta absoluta con path.resolve incluso develando directorios a rutas absolutas//


const respuesta = esArchivoMd(path.readFileSync(file, 'leelo'));
console.log(respuesta);

module.exports={
/*mdlinks,
md*/
}