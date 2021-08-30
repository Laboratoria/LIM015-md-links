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

function buscarArchivosMd(ruta) {
  let archivosMD = [];
  if (esDirectorio(ruta)) {
    const archivos = fs.readdirSync(ruta);

    archivos.forEach((archivo) => {
      const rutaFinal = path.join(ruta, archivo);

      if (esDirectorio(rutaFinal)) {
        archivosMD = archivosMD.concat(buscarArchivosMd(rutaFinal));
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
  let linksEncontrados = [];
  rutaArchivo.forEach((ruta) => {
    const regexMdLinks =
      /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g;
    const regexText =
      /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g;

    let informacion = fs.readFileSync(ruta, "utf8");
    const lineas = informacion.match(regexMdLinks);
    const descripciones = informacion.match(regexText);
    if (lineas != null) {
      for (let i = 0; i < lineas.length; i++) {
        const linkObj = {
          href: lineas[i],
          text: descripciones[i],
          file: ruta,
        };
        linksEncontrados.push(linkObj);
      }
    }
  });
  return linksEncontrados;
}

function validarLinks(links) {
  let linksValidados = links.map((element) => {
    return fetch(element.href)
      .then(function (response) {
        element.status = response.status;
        if (response.ok) {
          element.ok = "ok";
        } else {
          element.ok = "fail";
        }
        return element;
      })
      .catch(function (error) {
        console.log(
          "Hubo un problema con la petición Fetch de la URL [" +
            element.href +
            "]: " +
            error.message
        );
        return element;
      });
  });
  return linksValidados;
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
};
