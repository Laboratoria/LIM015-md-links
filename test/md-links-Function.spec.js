const { existsRoute, 
  routeValidation, 
  isDirectory, 
  isFile, 
  readDirectory, 
  joinFilewithPath, 
  readFile, 
  extracPathFilesMd,
  extracProLinks,
  getStatusLinks
} = require('../src/api.js');

describe('Validar si la ruta', () => {
  it('Debe retornar true si la ruta existe', () => {
    expect(existsRoute('C:\\Users\\bethz\\Documents\\Laboratoria\\archivos')).toBe(true);
  });

  it('Debe retornar false si la ruta no existe', () => {
    expect(existsRoute('C:\\Users\\bethz\\Documents\\Laboratoria\\archi')).toBe(false);
  });
});

describe('Funcion que cambia la ruta a absoluta', () => {
  it('Debe retornar la misma ruta', () => {
    expect(routeValidation('C:\\Users\\bethz\\Documents')).toBe('C:\\Users\\bethz\\Documents');
  });

  it('Debe retornar la ruta relativa a absoluta', () => {
    expect(routeValidation('./src/prueba')).toBe('C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba');
  });
});

describe('valida si es un directorio', () => {
  it('Debe retornar true si es un directorio', () => {
    expect(isDirectory('C:\\Users\\bethz\\Documents')).toBe(true);
  });

  it('Debe retornar false si es un archivo', () => {
    expect(isDirectory('C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\file.md')).toBe(false);
  });
});

describe('valida si es un archivo', () => {
  it('Debe retornar true si es un archivo', () => {
    expect(isFile('C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\file.md')).toBe(true);
  });

  it('Debe retornar false si es un directorio', () => {
    expect(isFile('C:\\Users\\bethz\\Documents')).toBe(false);    
  });
});

describe('lee un directorio', () => {  
  it('Debe retornar archivos que hay en un directorio', () => {   
    const output = [ 'directorio2', 'file.md', 'fileFail.md', 'prueba1.md', 'texto.txt' ]; 
    expect(readDirectory('C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba')).toEqual(output);
  });
});

describe('une los nombres de los archivas con sus rutas', () => {  
  it('Debe cada archivo con su ruta', () => {   
    const output = [
      'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\directorio2',
      'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\file.md',    
      'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\fileFail.md',
      'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\prueba1.md', 
      'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\texto.txt'   
    ]; 
    expect(joinFilewithPath('C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba')).toEqual(output);
  });
});

describe('lee un archivo .md', () => {  
  it('Debe retornar el contenido del archivo .md', () => {   
    expect(readFile('C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\file.md')).toEqual('[npm Script](https://docs.npmjs.com/cli/v7/using-npm/scripts)');
  });
});

describe('extrae en un array rutas de archivos .md', () => {  
  it('Debe un array con rutas de archivos .md', () => {   
    const output = [
      'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\directorio2\\file5.md',
      'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\directorio2\\file6.md'
    ]; 
    expect(extracPathFilesMd('./src/prueba/directorio2')).toEqual(output);
  });
});

describe('extrae href, texto y ruta', () => {  
  it('Debe extraer href, texto y ruta', () => {   
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
    expect(extracProLinks('./src/prueba/directorio2')).toEqual(output);
  });
});

describe('extrae los links y muestra sus status y propiedades', () => {  
  it('Debe extraer href, texto, ruta estatus: ok y mensaje', () => {   
    const input = [
      {
        href: 'https://jestjs.io/es-ES/docs/manual-mocks',
        text: 'Moks',
        file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\directorio2\\file5.md'
      }     
    ];

    const output = [
      {
        href: 'https://jestjs.io/es-ES/docs/manual-mocks',
        text: 'Moks',
        file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\directorio2\\file5.md',      
        status: 200,
        message: 'Ok'
      }
    ];    
    return expect(getStatusLinks(input)).resolves.toEqual(output);
  });

  it('Debe extraer href, texto, ruta estatus: fail y mensaje', () => {   
    const input = [
      {
        href: '://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia',
        text: 'open ClassRooms',
        file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\directorio2\\fileFail2.md'   
      }  
    ];    

    const output = [
      {
        href: '://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia',
        text: 'open ClassRooms',
        file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\directorio2\\fileFail2.md',  
        status: 'Error en la peticiòn TypeError: Only absolute URLs are supported',
        message: 'fail'
      }
    ];    

    return getStatusLinks(input).then(data => {
      expect(data).toEqual(output);
    });
    // return expect(getStatusLinks(input)).resolves.toEqual(output);
  });
});
