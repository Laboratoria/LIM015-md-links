const { routeExists, routeAbsolute, isDirectory } = require('../src/index.js');

describe('If routeExists', () => {
  it('es una función', () => {
    expect(typeof routeExists).toBe('function');
  });
});

describe('If routeAbsolute', () => {
  it('es una función', () => {
    expect(typeof routeAbsolute).toBe('function');
  });
  it('si la ruta es relativa pasar a absoluta', () => {
    expect(routeAbsolute('../Prueba/hola.txt')).toEqual('C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\Prueba\\hola.txt');
  });
});

describe('If isDirectory', () => {
  it('es una función', () => {
    expect(typeof isDirectory).toBe('function');
  });
  it('si la ruta es un directorio', () => {
    expect(isDirectory('C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\LIM015-md-links\\Prueba')).toBe(true);
  });
  it('si la ruta no es un directorio', () => {
    expect(isDirectory('C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\LIM015-md-links\\Prueba\\hola.txt')).toBe(false);
  });
});
