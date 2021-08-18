const {mdlinks}= require("./md-links.js");
const {md}= require("./md-links.js")
//Process es un objeto global de node // 
//process.argv es una propiedad que devuelve un arreglo con lo que escribes (puede ser lo) en la terminal 
//El metodo .slice copiaba una parte del arreglo segun lo que le pidamos que copie por su indice 
const rutadelUsuario = process.argv.slice(2);
mdlinks(rutadelUsuario)

md(rutadelUsuario)