const {
  esRutaAbsoluta,
  transformarRutaRelativa,
  existeRuta,
  buscarArchivosMd,
  validarLinks,
  buscarLinksEnArchivo,
} = require("./src/funciones");

mdLinks = function (path, opts) {
  return new Promise((resolve, reject) => {
    let rutaFinal = path;
    if (!esRutaAbsoluta(rutaFinal)) {
      rutaFinal = transformarRutaRelativa(rutaFinal);
    }

    if (!existeRuta(rutaFinal)) {
      reject("Path doesnt exists: + " + rutaFinal);
    }

    let archivosMD = buscarArchivosMd(rutaFinal);
    let arrayLinks = buscarLinksEnArchivo(archivosMD);

    if (opts.validate) {
      arrayLinks = validarLinks(arrayLinks);
      Promise.all(arrayLinks).then((values) => {
        resolve(values);
      });
    } else {
      resolve(arrayLinks);
    }
  });
};

module.exports = {
  mdLinks,
};
