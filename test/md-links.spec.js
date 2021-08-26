const { 
  esRutaAbsoluta,
  transformarRutaRelativa,
  existeRuta,buscarArchivosMd,
  esArchivosMd,esDirectorio,
  buscarLinksEnArchivo,
  obtenerArchivosMDConSusLinks,
  validarLinks
} = require('../src/funciones');


// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });



  describe('esRutaAbsoluta', () => {

    it('Es una funcion', () => {
     
    expect(typeof esRutaAbsoluta).toBe('function');
      
  });
  it('si es absoluta', () => {
    expect(esRutaAbsoluta("C://Users//elizabeth//Documents//GitHub//LIM015-md-links//prueba")).toEqual("C://Users//elizabeth//Documents//GitHub//LIM015-md-links//prueba");
});
  });

  describe('transformarRutaRelativa', () => {

    it('Es una funcion', () => {
     
    expect(typeof transformarRutaRelativa).toBe('function');

  });
  it('si no es absoluta', () => {
    expect(transformarRutaRelativa("prueba")).toEqual("C:\\Users\\elizabeth\\Documents\\GitHub\\LIM015-md-links\\prueba");
  });
  });

  describe('existeRuta', () => {

    it('Es una funcion', () => {
     
    expect(typeof existeRuta).toBe('function');

  });
  it('si no existe', () => {
    expect(existeRuta("movie")).toBe(false);
  });

  });

  
  describe('buscarArchivosMd', () => {

    it('Es una funcion', () => {
     
    expect(typeof buscarArchivosMd).toBe('function');

  });

  it('si un archivoMd', () => {
    expect(buscarArchivosMd("C:\\Users\\elizabeth\\Documents\\GitHub\\LIM015-md-links\\prueba")).toEqual(["C:\\Users\\elizabeth\\Documents\\GitHub\\LIM015-md-links\\prueba\\enlaces.md","C:\\Users\\elizabeth\\Documents\\GitHub\\LIM015-md-links\\prueba\\gm\\gm1.md", "C:\\Users\\elizabeth\\Documents\\GitHub\\LIM015-md-links\\prueba\\gm2\\gm2.md"]);
  });

  });

  describe('esArchivosMd', () => {

    it('Es una funcion', () => {
     
    expect(typeof esArchivosMd).toBe('function');

  });

  it('si es archivoMd', () => {
    expect(esArchivosMd("C://Users//elizabeth//Documents//GitHub//LIM015-md-links//prueba")).toBe(false);
});
  });


  describe('esDirectorio', () => {

    it('Es una funcion', () => {
     
    expect(typeof esDirectorio).toBe('function');

  });
  it('si es Directorio', () => {
    expect(esDirectorio("C://Users//elizabeth//Documents//GitHub//LIM015-md-links//prueba")).toBe(true);
});

  });


  describe('buscarLinksEnArchivo', () => {
    const links = [{
      link: 'https://github.com/Laboratoria/LIM015-data-lovers',
      descripcion: 'hola '
    },
    {
      link: 'https://docs.npmjs.com/cli/install',
      descripcion: 'docs oficiales de `npm install` acá'  
    },
    {
      link: 'https://github.com/Laboratoria/courseparser',
      descripcion: '`course-parser`'
    }];

    it('Es una funcion', () => {
     
    expect(typeof buscarLinksEnArchivo).toBe('function');

  });
  
//   it('si tiene links', () => {
//     expect(buscarLinksEnArchivo("C://Users//elizabeth//Documents//GitHub//LIM015-md-links//prueba")).toBe(links);
// });
  });

  describe('obtenerArchivosMDConSusLinks', () => {

    it('Es una funcion', () => {
     
    expect(typeof obtenerArchivosMDConSusLinks).toBe('function');

  });

  });



  describe('validarLinks', () => {

    it('Es una funcion', () => {
     
    expect(typeof validarLinks).toBe('function');

  });

  });

  


//  fs <stats>
// fs.statSync(path_string).isDirectory()



// describe('procesoVerificacion', () => {

//     it('Es una funcion', () => {
       
//     expect(typeof procesoVerificacion).toBe('function');
//    });
  
//   });


