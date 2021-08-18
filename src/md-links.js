const {validarruta}= require("./index.js");
const path= require("path");
const {esArchivoMd}=require("./index.js");

//convirtiendo a ruta absoluta con path.resolve incluso develando directorios a rutas absolutas//
function mdlinks(ruta){
validarruta(path.resolve(ruta[0]))
}
function md(file){
    esArchivoMd(path.readFileSync(file, 'leelo'))
}


module.exports={
mdlinks,
md
}