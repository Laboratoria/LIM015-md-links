const path = require('path');
const mdLinks = require('../src/index.js');
const {isAbsolute, isAFile, readAllFiles, isMd, pathExist, searchFileMd} = require("../src/ruta.js");


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});

// Test de ruta absoluta
describe('Permite convertir ruta relativa', () => {
  it('deberia ser una funcion', () => {
    expect(typeof isAbsolute).toBe('function');
  });
  it('Deberia retornar una ruta absoluta si es absoluta', () => {
    expect(isAbsolute('C:\\Users\\Rocio Sulca\\Desktop\\laboratoria\\LIM015-md-links\\Pruebaa')).toBe('C:\\Users\\Rocio Sulca\\Desktop\\laboratoria\\LIM015-md-links\\Pruebaa');
  });
  it('Deberia retornar una ruta absoluta si se le pasa una ruta relativa', () => {
    expect(isAbsolute('Pruebaa')).toBe('C:\\Users\\Rocio Sulca\\Desktop\\laboratoria\\LIM015-md-links\\Pruebaa')
  })
})

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

// Test de leer un archivo de un directorio
describe('Lee archivos de directorio', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof readAllFiles). toBe('function');
  });
  it('Deberia retornar los archivos del directorio', () => {
    expect(readAllFiles('./Pruebaa/archivo2.md')).toBe('[Mensajes HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Messages)');
  });
});

// Test que retorna archivos .md
describe('Retorna archivos .md', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof isMd).toBe('function');
  });
  it('Deberia retornar solo los archivos .md', () => {
    expect(isMd('archivo.md')).toBe(true);
  });
});

// Test que nos dice si la ruta es valida
describe('Verifica si la ruta es valida', () => {
  it('Deberia retornar una funcion', () => {
    expect(typeof pathExist).toBe('function');
  })
  it('Deberia retornar true si la ruta es valida', () => {
    expect(pathExist('src/index.js')).toBe(true);
  })
  it('Deberia retornar false si la ruta no es valida', () => {
    expect(pathExist('src/indexs.js')).toBe(false);
  });
});


it('Extrae archivos md y los guarda en un array', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof searchFileMd).toBe('function');
  });
  

  it('Deberia guardarlos en un array', () => {
    
  })
})
