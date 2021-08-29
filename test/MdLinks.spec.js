const { mdLinks } = require ('../src/mdlinks.js');

describe('test mdlinks', () => {  
  it('si es false, deberia retornar un array con sus 3 propiedades.', () => {   
    const output = [
      {
        href: 'https://jestjs.io/es-ES/docs/manual-mocks',
        text: 'Moks',
        file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\directorio2\\file5.md'
      },
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\directorio2\\file6.md'     
      }
    ];    
    return expect(mdLinks('./src/prueba/directorio2', { validate: false })).resolves.toEqual(output);
  });

  it('si es true, deberia retornar un array con sus 5 propiedades y mensaje ok, staus 200.', () => {   
    const output = [
      {
        href: 'https://jestjs.io/es-ES/docs/manual-mocks',
        text: 'Moks',
        file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\directorio2\\file5.md',
        status: 200,
        message: 'OK'
      },
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\directorio2\\file6.md',
        status: 200,
        message: 'OK'
      }
    ];    
    return expect(mdLinks('./src/prueba/directorio2', { validate: true })).resolves.toEqual(output);
  });

  test('si la ruta no existe debe devolver el mensaje de error.', () => {
    const error  = 'ruta no existe';
    return expect(mdLinks('./src/prueba/directo')).rejects.toEqual(error);
  });
});
