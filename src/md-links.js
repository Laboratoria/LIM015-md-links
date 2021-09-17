/* eslint-disable arrow-body-style */
/* El modulo fs significa file system, es un modulo nativo de node
que nos permite interactuar con los archivos del sistema
 ya que todas las operaciones de acceso de archivo estan englobadas en fs */
/* el require es un simil del import, require es una palabra clave
en nodejs se usa para importar algo de la base de node */
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const fetch = require('node-fetch');

// const rutadelUsuario = process.argv[2];

// Process es un objeto global de node //
// process.argv es una propiedad que devuelve un arreglo con lo que escribes () en la terminal
// El metodo .slice copiaba una parte del arreglo segun lo que le pidamos que copie por su indice

// para verificar si el archivo existe en la terminal powershel o bash, poner lo siguiente

// node src/index.js copia ruta relativa o absoluta y darle enter
// read a file

// 1.  existe una ruta de archivo o directorio/carpeta con fs.existsSync()//
const esRuta = (filePath) => fs.existsSync(filePath);
// console.log(esRuta(rutadelUsuario));

// 2.es ruta absoluta con el metodo: path.resolve(ruta)===(ruta) //
const rutaAbsolut = (ruta) => path.resolve(ruta) === (ruta);
// console.log(rutaAbsolut(rutadelUsuario));

// 3. Convierto a ruta absoluta con el metodo: path.resolve() //
const convertiraAbsolut = (ruta) => path.resolve(ruta);
// console.log(convertiraAbsolut(rutadelUsuario));

// 6.  es archivo con el metodo: fs.statSync().isFile()
const isArchivo = (ruta) => fs.statSync(ruta).isFile();
// console.log(isArchivo(rutadelUsuario));

// 4. es directorio/carpeta con el metodo: fs.statSync().isDirectory() //

const esDir = (ruta) => fs.statSync(ruta).isDirectory();
// console.log(esDir(rutadelUsuario));

// 5. Leer  o abrir directorio

const leerDir = (filePath) => fs.readdirSync(filePath);

// 7. el archivo es md con el metodo: path.extname() //
const extMd = (filePath) => path.extname(filePath) === '.md';

// console.log(extMd(rutadelUsuario));

// 5.1 recursividad filtrar archivos .md del directorio
const mdFilesArr = [];
const mdFiles = (directory) => {
  leerDir(directory).forEach((file) => {
    if (isArchivo(`${directory}/${file}`)) {
      if (extMd(`${directory}/${file}`)) {
        mdFilesArr.push(`${directory}/${file}`);
      }
      // eslint-disable-next-line no-empty
    } else { }
  });
  return mdFilesArr;
};

// console.log(mdFiles(rutadelUsuario));

// 8.leer archivo
const leerArchivo = (filePath) => fs.readFileSync(filePath, 'utf8');

// console.log(leerArchivo(rutadelUsuario));

// 9. obtener links
const almacenarLinks = [];
const obtenerLinks = (file) => {
  const renderer = new marked.Renderer();
  renderer.link = (href, title, text) => {
    const validarHref = /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/;
    // El método test() ejecuta la búsqueda de una ocurrencia entre
    // una expresión regular y una cadena especificada. Devuelve true o false. regexObj.test(cadena)
    if (validarHref.test(href)) {
      const linkInfo = {
        href,
        text,
        file,
      };
      almacenarLinks.push(linkInfo);
    }
  };
  marked(leerArchivo(file), { renderer });
  return almacenarLinks;
};

// console.log(obtenerLinks(rutadelUsuario));

// Valida los links con fetch
const validater = (arr) => arr.map((obj) => fetch(obj.href)
  .then((res) => {
    return {
      href: obj.href,
      text: obj.text,
      file: obj.file,
      status: res.status,
      message: (res.status === 200) ? 'OK' : 'FAIL',
    };
  })
  .catch(() => {
    return {
      href: obj.href,
      text: obj.text,
      file: obj.file,
      status: 500,
      message: 'FAIL',
    };
  }));

// consolear la promesa del validater

/* Promise.all(validater(obtenerLinks(process.argv[2])))
.then((res) => {
    console.log(res)
 })
 .catch((error) => console.error(error)); */

module.exports = {

  esRuta,
  rutaAbsolut,
  esDir,
  convertiraAbsolut,
  isArchivo,
  extMd,
  leerArchivo,
  obtenerLinks,
  mdFiles,
  validater,
};
