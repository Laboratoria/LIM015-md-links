/* eslint-disable prefer-promise-reject-errors */
const {
  esRuta,
  esDir,
  convertiraAbsolut,
  isArchivo,
  extMd,
  obtenerLinks,
  mdFiles,
  validater,
} = require('./md-links');

// const rutadelUsuario = process.argv[2];

const mdLinks = (filePath, option) => new Promise((resolve, reject) => {
  const absolutePath = convertiraAbsolut(filePath);
  if (esRuta(filePath)) {
    if (isArchivo(absolutePath) && extMd(absolutePath)) {
      if (option && option.validate) {
        const validarLinks = validater(obtenerLinks(absolutePath));
        Promise.all(validarLinks)
          .then((res) => resolve(res))
          .catch((x) => (x));
      } else { resolve(obtenerLinks(absolutePath)); }
    } else if (esDir(absolutePath)) {
      let promises;
      if (option && option.validate) {
        mdFiles(absolutePath).forEach((file) => {
          promises = validater(obtenerLinks(file));
        });
        Promise.all(promises)
          .then((res) => resolve(res))
          .catch((x) => (x));
      } else { mdFiles(absolutePath).forEach((file) => { resolve(obtenerLinks(file)); }); }
    } else { reject('No es archivo MD'); }
  } else { reject('Ruta no existe'); }
});

/* mdLinks(rutadelUsuario, { validate: true })
  .then((links) => {
    console.log(links);
  })
  .catch((error) => console.log(error)); */

module.exports = {
  mdLinks,
};
