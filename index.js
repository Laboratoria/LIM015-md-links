module.exports = (verificRoute) => {};
//const chalk = require("chalk");
const path = require("path");
const fs = require("fs");

//const { yellow } = require("chalk");

const userRoute = process.argv[2];

class Links {
  constructor(link, descripcion, estado, codigoHTTP) {
    this.link = link;
    this.descripcion = descripcion;
    this.estado = estado;
    this.codigoHTTP = codigoHTTP;
  }
}

class ArchivosMD{
  constructor (ruta,links){
    this.ruta = ruta;
    this.links= links;
  }
}
function procesoVerificacion(ruta) {
  //validar link mdlink
  let rutaFinal = ruta;
  if (!esRutaAbsoluta(ruta)) {
    rutaFinal = transformarRutaRelativa(ruta);
  }

  if (!existeRuta(rutaFinal)) {
    console.log("La Ruta No Existe");
    return false;
  }

  let archivosMD = buscarArchivosMd(rutaFinal);
  let arrayArchivosMd = [];

  archivosMD.forEach((archivoMD) => {
    let linksEncontrados = buscarLinksEnArchivo(archivoMD);
    let archivoMDEncontrado= new ArchivosMD(archivoMD,linksEncontrados);
    arrayArchivosMd.push(archivoMDEncontrado);
  });

   console.log(arrayArchivosMd);
}

procesoVerificacion(userRoute);

function esRutaAbsoluta(ruta) {
  if (path.isAbsolute(ruta)) {
    return true;
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
  const regexMdLinks = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g;
  const regexText =
    /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g;
  let linksEncontrados = [];
  let informacion = fs.readFileSync(rutaArchivo, "utf8");
  const lineas = informacion.match(regexMdLinks);
  const descripciones = informacion.match(regexText);

  if (lineas != null) {
    for (let i = 0; i < lineas.length; i++) {
      let link = new Links(lineas[i], descripciones[i]);
      linksEncontrados.push(link);
    }
  }

  return linksEncontrados;
}

// function validarLinks(link) {

// }
