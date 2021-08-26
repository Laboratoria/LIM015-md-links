const {
  esRutaAbsoluta,
  transformarRutaRelativa,
  existeRuta,
  buscarArchivosMd,
  validarLinks,
  obtenerArchivosMDConSusLinks,
} = require("./src/funciones");

//const { yellow } = require("chalk");
const ruta = process.argv[2];

function procesoVerificacion(ruta) {
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

  let arrayArchivosMd = obtenerArchivosMDConSusLinks(archivosMD);

  for (let i = 0; i < arrayArchivosMd.length; i++) {
    let archivoMd = arrayArchivosMd[i];

    for (let j = 0; j < archivoMd.links.length; j++) {
      let link = archivoMd.links[j];
      console.log(link.link);
      validarLinks(link.link);
    }
  }
}

procesoVerificacion(ruta);
