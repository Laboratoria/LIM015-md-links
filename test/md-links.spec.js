const path = require('path');
const mdLinks = require('../src/index.js');
const {isAbsolute, isAFile, readAllFiles} = require("../src/ruta.js");
// const route = "C:\Users\Rocio Sulca\Desktop\laboratoria\LIM015-md-links\Pruebaa\archivo.md";


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});

// Test de ruta absoluta

describe('Permite convertir ruta relativa', () => {
  it('Debería ser una función', () => {
    expect(typeof isAbsolute).toBe('function');
  });
  it('Debería retornar una ruta absoluta', () => {
    expect(isAbsolute(path.join(process.cwd(), 'Pruebaa\\archivo.md'))).toBe(path.join(process.cwd(), 'Pruebaa\\archivo.md'));
  });
  it('Debería convertir una ruta relativa a absoluta', () => {
    expect(isAbsolute('Pruebaa/archivo.md')).toBe(path.join(process.cwd(), 'Pruebaa\\archivo.md'));
  });
});

// Test para verificar si es un archivo
describe('Verifica si es un archivo', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof isAFile).toBe('function');
  });
  it('Deberia retornar true si es una archivo', () => {
    expect(isAFile('Pruebaa/archivo.md')).toBe(true);
  }); 
  it('Deberia retornar false si no es una archivo', () => {
    expect(isAFile('Pruebaa')).toBe(false);
  }); 
});


describe('Lee archivos de directorio', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof readAllFiles). toBe('function');
  });
  // const rout = 'C:\Users\Rocio Sulca\Desktop\laboratoria\LIM015-md-links\Pruebaa\archivo.md'

  it('Deberia retornar los archivos del directorio', () => {
    expect(readAllFiles('./Pruebaa/archivo.md')).toBe('');
  });
});