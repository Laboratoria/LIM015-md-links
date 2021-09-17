"use strict";

/* eslint-disable prefer-promise-reject-errors */
var _require = require('./md-links'),
    esRuta = _require.esRuta,
    esDir = _require.esDir,
    convertiraAbsolut = _require.convertiraAbsolut,
    isArchivo = _require.isArchivo,
    extMd = _require.extMd,
    obtenerLinks = _require.obtenerLinks,
    mdFiles = _require.mdFiles,
    validater = _require.validater; // const rutadelUsuario = process.argv[2];


var mdLinks = function mdLinks(filePath, option) {
  return new Promise(function (resolve, reject) {
    var absolutePath = convertiraAbsolut(filePath);

    if (esRuta(filePath)) {
      if (isArchivo(absolutePath) && extMd(absolutePath)) {
        if (option && option.validate) {
          var validarLinks = validater(obtenerLinks(absolutePath));
          Promise.all(validarLinks).then(function (res) {
            return resolve(res);
          })["catch"](function (x) {
            return x;
          });
        } else {
          resolve(obtenerLinks(absolutePath));
        }
      } else if (esDir(absolutePath)) {
        var promises;

        if (option && option.validate) {
          mdFiles(absolutePath).forEach(function (file) {
            promises = validater(obtenerLinks(file));
          });
          Promise.all(promises).then(function (res) {
            return resolve(res);
          })["catch"](function (x) {
            return x;
          });
        } else {
          mdFiles(absolutePath).forEach(function (file) {
            resolve(obtenerLinks(file));
          });
        }
      } else {
        reject('No es archivo MD');
      }
    } else {
      reject('Ruta no existe');
    }
  });
};
/* mdLinks(rutadelUsuario, { validate: true })
  .then((links) => {
    console.log(links);
  })
  .catch((error) => console.log(error)); */


module.exports = {
  mdLinks: mdLinks
};