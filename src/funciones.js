const path = require("path");
const fs = require("fs");
const fetch = require("node-fetch");

function esRutaAbsoluta(ruta) {
  if (path.isAbsolute(ruta)) {
    return ruta;
  }
}

function transformarRutaRelativa(ruta) {
  return path.resolve(ruta);
}

function existeRuta(ruta) {
  return fs.existsSync(ruta);
}

function buscarArchivosMd(ruta, archivosMD = []) {
  if (esDirectorio(ruta)) {
    const archivos = fs.readdirSync(ruta);

    archivos.forEach((archivo) => {
      const rutaFinal = path.join(ruta, archivo);

      if (esDirectorio(rutaFinal)) {
        buscarArchivosMd(rutaFinal, archivosMD);
      } else if (esArchivosMd(rutaFinal)) {
        archivosMD.push(rutaFinal);
      }
    });
  } else if (esArchivosMd(ruta)) {
    archivosMD.push(ruta);
  }

  return archivosMD;
}

function esArchivosMd(ruta) {
  return /\.md$/.test(ruta);
}

function esDirectorio(ruta) {
  return fs.lstatSync(ruta).isDirectory();
}

function buscarLinksEnArchivo(rutaArchivo) {
  links = [];
  const regexMdLinks = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g;
  const regexText =
    /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g;
  let linksEncontrados = [];
  let informacion = fs.readFileSync(rutaArchivo, "utf8");
  console.log(informacion);
  const lineas = informacion.match(regexMdLinks);
  const descripciones = informacion.match(regexText);

  if (lineas != null) {
    for (let i = 0; i < lineas.length; i++) {
      const linkObj = {
        link: lineas[i],
        descripcion: descripciones[i]
      };
      linksEncontrados.push(linkObj);
    }
  }

  return linksEncontrados;
}

function obtenerArchivosMDConSusLinks(rutas){
  let arrayArchivosMd = [];
  rutas.forEach((rutaDeArchivo) => {
    let linksEncontrados = buscarLinksEnArchivo(rutaDeArchivo);
     let archivoMDEncontrado = {
       ruta:rutaDeArchivo,
       links:linksEncontrados
     };
     
     arrayArchivosMd.push(archivoMDEncontrado);
   });
   return arrayArchivosMd;
}

function validarLinks(link) {
  fetch(link)
    .then(function (response) {
      console.log(response.status);

      if (response.ok) {
        console.log("Respuesta de red OK");
      } else {
        console.log("Respuesta de red OK pero respuesta HTTP no OK");
      }
    })
    .catch(function (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    });
}

module.exports = {
  esRutaAbsoluta,
  transformarRutaRelativa,
  existeRuta,
  buscarArchivosMd,
  esArchivosMd,
  esDirectorio,
  buscarLinksEnArchivo,
  validarLinks,
  obtenerArchivosMDConSusLinks,
};
