// const mdLinks = require('../javascript/index.js');
const path = require('../javascript/path');

describe('getPath', () => {
  it('Debería ser una función', () => {
    expect(typeof path.getPath).toBe('function');
  });
  it('Debería retornar la misma ruta', () => {
    expect(path.getPath('/Users/katy/Desktop/LABORATORIA-ANDREA/LIM015-md-links/lib/index.js')).toBe('/Users/katy/Desktop/LABORATORIA-ANDREA/LIM015-md-links/lib/index.js');
  });
});

describe('pathExist', () => {
  it('Debería ser una función', () => {
    expect(typeof path.pathExist).toBe('function');
  });
  it('Debería retornar true', () => {
    expect(path.pathExist('/Users/katy/Desktop/LABORATORIA-ANDREA/LIM015-md-links/lib/prueba.txt')).toBeTruthy();
  });
  it('Debería retornar false', () => {
  expect(path.pathExist('/Users/katy/Desktop/LABORATORIA-ANDREA/LIM015-md-links/lib/prueba2.txt')).toBeFalsy();
});
});

describe('pathAbsolute', () => {
  it('Debería ser una función', () => {
    expect(typeof path.pathAbsolute).toBe('function');
  });
  it('Debería retornar una ruta absoluta', () => {
    expect(path.pathAbsolute('lib/READMELAB.md')).toBeFalsy();
  });
  it('Debería ser true para ruta absoluta', () => {
    expect(path.pathAbsolute('/Users/katy/Desktop/LABORATORIA-ANDREA/LIM015-md-links/lib/READMELAB.md')).toBeTruthy();
  });
});

describe('relativeToAbsolutePath', () => {
  it('Debería ser una función', () => {
    expect(typeof path.relativeToAbsolutePath).toBe('function');
  });
  it('Debería retornar ruta absoluta', () => {
    expect(path.relativeToAbsolutePath('lib/prueba.txt')).toBe('/Users/katy/Desktop/LABORATORIA-ANDREA/LIM015-md-links/lib/prueba.txt');
  });
});

describe('pathIsDirectory', () => {
  it('Debería ser una funcion', () => {
    expect(typeof path.pathIsDirectory).toBe('function');
  });
  it('Debería ser true para un directorio', () => {
    expect(path.pathIsDirectory('javascript')).toBeTruthy();
  });
  it('Debería ser false para un archivo', () => {
    expect(path.pathIsDirectory('lib/prueba.txt')).toBeFalsy();
  });
});

describe('readDirectory', () => {
  it('Debería ser una función', () => {
    expect(typeof path.readDirectory).toBe('function');
  });
  it('Debería mostrar todos los archivos', () => {
    expect(path.readDirectory('lib')).toEqual([ 'READMELAB.md', 'prueba.txt' ]);
  });
});

// DETENTE! AQUI LEER README!
describe('extIsMd', () => {
  it('Debería ser una función', () => {
    expect(typeof path.extIsMd).toBe('function');
  });
  it('Debería ser true para .md', () => {
    expect(path.extIsMd('lib/prueba.txt')).toBeFalsy();
  });
  it('Debería ser true para .md', () => {
    expect(path.extIsMd('lib/READMELAB.md')).toBeTruthy();
  });
});