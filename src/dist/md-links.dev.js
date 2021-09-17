"use strict";

/* eslint-disable arrow-body-style */

/* El modulo fs significa file system, es un modulo nativo de node
que nos permite interactuar con los archivos del sistema
 ya que todas las operaciones de acceso de archivo estan englobadas en fs */

/* el require es un simil del import, require es una palabra clave
en nodejs se usa para importar algo de la base de node */
var fs = require('fs');

var path = require('path');

var marked = require('marked');

var fetch = require('node-fetch'); // const rutadelUsuario = process.argv[2];
// Process es un objeto global de node //
// process.argv es una propiedad que devuelve un arreglo con lo que escribes () en la terminal
// El metodo .slice copiaba una parte del arreglo segun lo que le pidamos que copie por su indice
// para verificar si el archivo existe en la terminal powershel o bash, poner lo siguiente
// node src/index.js copia ruta relativa o absoluta y darle enter
// read a file
// 1.  existe una ruta de archivo o directorio/carpeta con fs.existsSync()//


var esRuta = function esRuta(filePath) {
  return fs.existsSync(filePath);
}; // console.log(esRuta(rutadelUsuario));
// 2.es ruta absoluta con el metodo: path.resolve(ruta)===(ruta) //


var rutaAbsolut = function rutaAbsolut(ruta) {
  return path.resolve(ruta) === ruta;
}; // console.log(rutaAbsolut(rutadelUsuario));
// 3. Convierto a ruta absoluta con el metodo: path.resolve() //


var convertiraAbsolut = function convertiraAbsolut(ruta) {
  return path.resolve(ruta);
}; // console.log(convertiraAbsolut(rutadelUsuario));
// 6.  es archivo con el metodo: fs.statSync().isFile()


var isArchivo = function isArchivo(ruta) {
  return fs.statSync(ruta).isFile();
}; // console.log(isArchivo(rutadelUsuario));
// 4. es directorio/carpeta con el metodo: fs.statSync().isDirectory() //


var esDir = function esDir(ruta) {
  return fs.statSync(ruta).isDirectory();
}; // console.log(esDir(rutadelUsuario));
// 5. Leer  o abrir directorio


var leerDir = function leerDir(filePath) {
  return fs.readdirSync(filePath);
}; // 7. el archivo es md con el metodo: path.extname() //


var extMd = function extMd(filePath) {
  return path.extname(filePath) === '.md';
}; // console.log(extMd(rutadelUsuario));
// 5.1 recursividad filtrar archivos .md del directorio


var mdFilesArr = [];

var mdFiles = function mdFiles(directory) {
  leerDir(directory).forEach(function (file) {
    if (isArchivo("".concat(directory, "/").concat(file))) {
      if (extMd("".concat(directory, "/").concat(file))) {
        mdFilesArr.push("".concat(directory, "/").concat(file));
      } // eslint-disable-next-line no-empty

    } else {}
  });
  return mdFilesArr;
}; // console.log(mdFiles(rutadelUsuario));
// 8.leer archivo


var leerArchivo = function leerArchivo(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}; // console.log(leerArchivo(rutadelUsuario));
// 9. obtener links


var almacenarLinks = [];

var obtenerLinks = function obtenerLinks(file) {
  var renderer = new marked.Renderer();

  renderer.link = function (href, title, text) {
    var validarHref = /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/; // El método test() ejecuta la búsqueda de una ocurrencia entre
    // una expresión regular y una cadena especificada. Devuelve true o false. regexObj.test(cadena)

    if (validarHref.test(href)) {
      var linkInfo = {
        href: href,
        text: text,
        file: file
      };
      almacenarLinks.push(linkInfo);
    }
  };

  marked(leerArchivo(file), {
    renderer: renderer
  });
  return almacenarLinks;
}; // console.log(obtenerLinks(rutadelUsuario));
// Valida los links con fetch


var validater = function validater(arr) {
  return arr.map(function (obj) {
    return fetch(obj.href).then(function (res) {
      return {
        href: obj.href,
        text: obj.text,
        file: obj.file,
        status: res.status,
        message: res.status === 200 ? 'OK' : 'FAIL'
      };
    })["catch"](function () {
      return {
        href: obj.href,
        text: obj.text,
        file: obj.file,
        status: 500,
        message: 'FAIL'
      };
    });
  });
}; // consolear la promesa del validater

/* Promise.all(validater(obtenerLinks(process.argv[2])))
.then((res) => {
    console.log(res)
 })
 .catch((error) => console.error(error)); */


module.exports = {
  esRuta: esRuta,
  rutaAbsolut: rutaAbsolut,
  esDir: esDir,
  convertiraAbsolut: convertiraAbsolut,
  isArchivo: isArchivo,
  extMd: extMd,
  leerArchivo: leerArchivo,
  obtenerLinks: obtenerLinks,
  mdFiles: mdFiles,
  validater: validater
};