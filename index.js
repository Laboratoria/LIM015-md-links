

//const { yellow } = require("chalk");
//const ruta = process.argv[2];

/*function procesoVerificacion(ruta) {
  let rutaFinal = ruta;
  if (!esRutaAbsoluta(ruta)) {
    rutaFinal = transformarRutaRelativa(ruta);
    console.log(rutaFinal);
  }

  if (!existeRuta(rutaFinal)) {
    console.log("La Ruta No Existe");
    return false;
  }

  let archivosMD = buscarArchivosMd(rutaFinal);
  let arrayLinks = buscarLinksEnArchivo(archivosMD);
  //si no te piden validar devuelve arrayLinks dentro de una promesa
  //si te piden validar devuelve el valor del metodo validarLinks
  arrayLinks = validarLinks(arrayLinks);

  Promise.all(arrayLinks).then((values) => {
    console.log(values, 31);
  });
}*/

