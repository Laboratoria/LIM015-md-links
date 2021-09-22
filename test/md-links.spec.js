/* eslint-disable no-undef */
/* const mdLinks = require('../'); */
const {
  esRuta, rutaAbsolut, esDir, convertiraAbsolut, isArchivo, extMd, mdFiles, leerArchivo, obtenerLinks, validater,
} = require('../src/md-links');
const fetch = require('node-fetch');
jest.mock('node-fetch');
// const mdFile = path.join(process.cwd(), 'test', 'prueba2', 'prueba20.md');
// console.log(mdFile);

const objeto = [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    file: 'C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\test\\prueba2\\prueba20.md'
  },
];
const objetoStatus = {
  status: 200,
  message: 'OK'
};
const resultado = [{
  href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
  text: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
  file: 'C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\test\\prueba2\\prueba20.md',
  status: 200,
  message: 'OK'
}];
// const{verArchivo}= require("../src/md-links.js");
// const {fs} = require("fs");
describe('mdLinks', () => {
  // Debe verificar si ruta existe
  it('Debe verificar si ruta existe', () => {
    expect(esRuta('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src\\cli.js')).toBe(true);
  });
  // Verificar si ruta no existe
  it('Debe verificar si ruta No existe', () => {
    expect(esRuta('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src\\cl.js')).toBe(false);
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
    expect(esDir('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src')).toBe(true);
  });
  // tiene que volver false cuando no es directorio o carpeta
  it('Debe volver false cuando no es directorio o carpeta', () => {
    expect(esDir('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\README.md')).toBe(false);
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
    expect(extMd('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\README.md')).toBe(true);
  });
  // tiene que volver falso cuando no es .md
  it('Debe volver falso cuando no es .md', () => {
    expect(extMd('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src\\cli.js')).toBe(false);
  });
  // tiene que volver un array de archivos Md filtrados del directorio
  it('Debe volver un array de archivos Md filtrados del directorio', () => {
    expect(mdFiles('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src')).toStrictEqual(['C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src/prueba.md']);
  });
  // tiene devolver el contenido del archivo
  it('Debe devolver el contenido del archivo', () => {
    expect(leerArchivo('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\test\\prueba2\\prueba20.md')).toEqual('Siguiendo otro camino completamente, podríamos usar[expresiones regulares (`RegExp`)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions.');
  });
  // tiene devolver un array con objetos links, text y ruta
  it('Debe devolver un array con objetos links, text y ruta', () => {
    expect(obtenerLinks('C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\test\\prueba2\\prueba20.md')).toStrictEqual([
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
        text: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
        file: 'C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\test\\prueba2\\prueba20.md'
      }
    ])
  })
  // tiene que verificar si es una funcion
  it('Debe verificar si es función', () => {
    expect(typeof validater).toBe('function');
  });
  // tiene que devolver un array con 5 objetos
  test('Debe devolver un mock promesa status 200', async () => {
    fetch.mockResolvedValue(objetoStatus);
    return Promise.all(validater(objeto)).then((data) => {
      expect(data).toStrictEqual(resultado);
    });
  });
});
