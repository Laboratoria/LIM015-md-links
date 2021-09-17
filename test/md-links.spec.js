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
    expect(path.pathAbsolute('lib/READMELAB.md')).toBe('/Users/katy/Desktop/LABORATORIA-ANDREA/LIM015-md-links/lib/READMELAB.md');
  });
  it('Debería ser true para ruta absoluta', () => {
    expect(path.pathAbsolute('/Users/katy/Desktop/LABORATORIA-ANDREA/LIM015-md-links/lib/READMELAB.md')).toBeTruthy();
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