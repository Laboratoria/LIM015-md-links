const { pathExist, pathAbsolute, pathIsDirectory,
  readDirectory, extIsMd, readFile, concatRoute } = require('../src/path');
const { traverseDirectoryFindFiles } = require('../src/mdLinksApi');

describe('pathExist', () => {
  it('Debería ser una función', () => {
    expect(typeof pathExist).toBe('function');
  });
  it('Debería retornar true', () => {
    expect(pathExist('/Users/katy/Desktop/LABORATORIA-ANDREA/LIM015-md-links/lib/prueba.txt')).toBeTruthy();
  });
  it('Debería retornar false', () => {
  expect(pathExist('/Users/katy/Desktop/LABORATORIA-ANDREA/LIM015-md-links/lib/prueba2.txt')).toBeFalsy();
});
});

describe('pathAbsolute', () => {
  it('Debería ser una función', () => {
    expect(typeof pathAbsolute).toBe('function');
  });
  it('Debería retornar una ruta absoluta', () => {
    expect(pathAbsolute('lib/READMELAB.md')).toBe('/Users/katy/Desktop/LABORATORIA-ANDREA/LIM015-md-links/lib/READMELAB.md');
  });
  it('Debería ser true para ruta absoluta', () => {
    expect(pathAbsolute('/Users/katy/Desktop/LABORATORIA-ANDREA/LIM015-md-links/lib/READMELAB.md')).toBeTruthy();
  });
});

describe('pathIsDirectory', () => {
  it('Debería ser una funcion', () => {
    expect(typeof pathIsDirectory).toBe('function');
  });
  it('Debería ser true para un directorio', () => {
    expect(pathIsDirectory('lib')).toBeTruthy();
  });
  it('Debería ser false para un archivo', () => {
    expect(pathIsDirectory('lib/prueba.txt')).toBeFalsy();
  });
});

describe('readDirectory', () => {
  it('Debería ser una función', () => {
    expect(typeof readDirectory).toBe('function');
  });
  it('Debería mostrar todos los archivos', () => {
    expect(readDirectory('lib')).toEqual([ 'READMELAB.md', 'mdlinks.md', 'prueba', 'prueba.txt' ]);
  });
});

describe('extIsMd', () => {
  it('Debería ser una función', () => {
    expect(typeof extIsMd).toBe('function');
  });
  it('Debería ser true para .md', () => {
    expect(extIsMd('lib/prueba.txt')).toBeFalsy();
  });
  it('Debería ser true para .md', () => {
    expect(extIsMd('lib/READMELAB.md')).toBeTruthy();
  });
});

describe('readFile', () => {
  it('Debería ser una función', () => {
    expect(typeof readFile).toBe('function');
  });
  it('Debería leer el contenido de un archivo', () => {
    expect(readFile('lib/prueba.txt')).toBe('Este es un archivo de prueba');
  });
});

describe('concatRoute', () => {
  it('Debería ser una función', () => {
    expect(typeof concatRoute).toBe('function');
  });
  it('Debería unir las rutas', () => {
    expect(concatRoute('lib/prueba', 'prueba2')).toBe('lib/prueba/prueba2');
  });
});

describe('traverseDirectoryFindFiles', () => {
  it('Debería ser una función', () => {
    expect(typeof traverseDirectoryFindFiles).toBe('function');
  });
  it('Debería mostrarme todos los archivos .md', () => {
    const result = [
      'lib/READMELAB.md',
      'lib/mdlinks.md',
      'lib/prueba/prueba.md',
      'lib/prueba/prueba2/prueba2.md'
    ]
    expect(traverseDirectoryFindFiles('lib')).toEqual(result);
  });
  it('Debería ser null para archivos diferentes a .md', () => {
    expect('lib/prueba.txt').toBeNull;
  });
});