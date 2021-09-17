/* eslint-disable no-undef */
/* const mdLinks = require('../'); */
const {
  validarRuta, rutaAbsolut, esDirectorio, convertiraAbsolut, isArchivo, esArchivoMd,
} = require('../src/md-links');
// const{verArchivo}= require("../src/md-links.js");
// const {fs} = require("fs");
describe('mdLinks', () => {
  // Debe verificar si ruta existe
  it('Debe verificar si ruta existe', () => {
    expect(validarRuta('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src\\cli.js')).toBe(true);
  });
  // Verificar si ruta no existe
  it('Debe verificar si ruta No existe', () => {
    expect(validarRuta('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src\\cl.js')).toBe(false);
  });

  // prueba2 ver si es función//
  it('Debe verificar si es función', () => {
    expect(typeof isArchivo).toBe('function');
  });
  /* it('should...', (done) => {
     try { expect(isArchivo(
      "C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\README.md")).toBe(true)
          done()
     } catch (e){done(e);}
   });
   //tiene que volver falso cuando no es archivo
   it('should...', (done) => {
    try { expect
      (isArchivo
        ("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\READ.md")).toBe(false)
         done()
    } catch (e){done(e);}
  }); */

  // si es ruta absoluta dar true
  it('Debe verificar si es ruta absoluta y dar true', () => {
    expect(rutaAbsolut('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src\\cli.js')).toBe(true);
  });
  // si No es ruta absoluta dar false
  it('Debe verificar si No es ruta absoluta y dar false', () => {
    expect(rutaAbsolut('src\\cl.js')).toBe(false);
  });
  // tiene que volver true cuando es directorio o carpeta
  it('Debe volver true cuando es directorio o carpeta', () => {
    expect(esDirectorio('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src')).toBe(true);
  });
  // tiene que volver false cuando no es directorio o carpeta
  it('Debe volver false cuando no es directorio o carpeta', () => {
    expect(esDirectorio('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\README.md')).toBe(false);
  });
  // Verificar si convierte ruta relativa o directorio/carpeta a ruta absoluta
  it('Debe Verificar si convierte ruta relativa o directorio/carpeta a ruta absoluta', () => {
    expect(convertiraAbsolut('src\\cli.js')).toBe('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src\\cli.js');
  });
  // tiene que volver true cuando es archivo
  it('Debe volver true cuando es archivo', () => {
    expect(isArchivo('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\README.md')).toBe(true);
  });
  // tiene que volver falso cuando no es archivo
  it('Debe volver falso cuando no es archivo', () => {
    expect(isArchivo('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src')).toBe(false);
  });

  // tiene que volver true cuando es .md
  it('Debe volver true cuando es .md', () => {
    expect(esArchivoMd('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\README.md')).toBe(true);
  });
  // tiene que volver falso cuando no es .md
  it('Debe volver falso cuando no es .md', () => {
    expect(esArchivoMd('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src\\cli.js')).toBe(false);
  });
});
