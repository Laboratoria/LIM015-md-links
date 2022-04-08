const path = require('path');
const { mdLinks } = require('../src/index.js');
const {
  isAbsolute, 
  isAFile, 
  readAllFiles, 
  isMd, 
  pathExist, 
  searchFileMd, 
  readLinksMd, 
  validateLink,
  uniqueLink,
  brokenLink,
  totalLink} = require("../src/ruta.js");

const arrLinkPrueb = [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Messages',
    text: 'Mensajes HTTP - MDN',
    pathFile: './Pruebaa/archivo2.md'
  }
]

const arrArchPrueb = [ 'Pruebaa\\archivo.md', 'Pruebaa\\archivo2.md', 'Pruebaa\\pruebita\\archivo3.md' ]

const arrStatsPrueb = [
  {
  href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
  text: 'Arreglos',
  pathFile: 'Pruebaa\\archivo.md',
  status: 200,
  statusText: 'OK'
  },
  {
  href: 'https://www.google.com/no-existe',
  text: 'https://www.google.com/no-existe',
  pathFile: 'Pruebaa\\archivo.md',
  status: 404,
  statusText: 'FAIL'
  }
];

const arrValidPrueb = { "0": ".", "1": "/", "10": "p", "11": "r", "12": "u", "13": "e", "14": "b", "15": "i",
  "16": "t", "17": "a", "18": "/", "19": "a", "2": "P", "20": "r", "21": "c", "22": "h", "23": "i","24": "v", 
  "25": "o", "26": "3","27": ".",  "28": "m", "29": "d",   "3": "r", "4": "u",
  "5": "e", "6": "b", "7": "a", "8": "a", "9": "/",
  "status": "ERR",
  "statusText": "FAIL",
};

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

// Test que extrae los archivos .md
describe('Extrae los archivos .md de un directorio', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof searchFileMd).toBe('function');
  });
  it('Deberia extraer los archivos .md', () => {
    expect(searchFileMd('./Pruebaa')).toEqual(arrArchPrueb);
  });
});

// Test que devuelve los links del archivo md
describe('Extrae links de los archivos md y los guarda en un array', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof readLinksMd).toBe('function');
  });
  it('Deberia mostrar los enlaces con el href, text y path file', () => {
    expect(readLinksMd('./Pruebaa/archivo2.md')).toEqual(arrLinkPrueb);
  });
});

// Test de validar la ruta
describe('Permite validar el link que se encuentra en la ruta ingresada', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof validateLink).toBe('function')
  });
  it('Debería devolvernos una promesa', (done) => {validateLink('./Pruebaa/pruebita/archivo3.md')
    .then((data) => {
      expect(data).toStrictEqual(arrValidPrueb);
      done();
    })});
});

// Test de links unicos
describe('Nos muestra enlace unico',() => {
  it('Deberia ser una funcion', () => {
    expect(typeof uniqueLink).toBe('function');
  });
  it('Deberia retornar enlaces unicos', () => {
    expect(uniqueLink(arrStatsPrueb)).toBe("\nUnique: 2")
  });
});

// Test de links rotos
describe('Nos muestra enlaces rotos',() => {
  it('Deberia ser una funcion', () => {
    expect(typeof brokenLink).toBe('function');
  });
  it('Deberia retornar enlaces rotos', () => {
    expect(brokenLink(arrStatsPrueb)).toBe("\nBroken: 1")
  });
});

// Test de links totales
describe('Nos muestra enlaces totales',() => {
  it('Deberia ser una funcion', () => {
    expect(typeof totalLink).toBe('function');
  });
  it('Deberia retornar enlaces totales', () => {
    expect(totalLink(arrStatsPrueb)).toBe("\nTotal: 2")
  });
});


 const arrayUnvalided = [  
    {
      href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Messages',
      text: 'Mensajes HTTP - MDN',
      pathFile: 'Pruebaa\\archivo2.md'
    }
  ]


const pruebita = [
  {
    href: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/",
    pathFile: "Pruebaa\\archivo.md",
    status: 200,
    statusText: "OK",
    text: "Array - MDN",
  },
  {
    href: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
    pathFile: "Pruebaa\\archivo.md",
    status: 200,
    statusText: "OK",
    text: "Array.prototype.sort() - MDN",
  },
  {
    href: "https://www.google.com/no-existe",
    pathFile: "Pruebaa\\archivo.md",
    status: 404,
    statusText: "FAIL",
    text: "https://www.google.com/no-existe",
 }
]



  describe('Permite devolver un array con objetos de la ruta ingresada', () => {
    it('Debería devolvernos una promesa con validacion del link', (done) => { mdLinks('Pruebaa\\archivo.md', { validate: true })
      .then((data) => {
        expect(data).toStrictEqual(pruebita);
        done();
      })});
    it('Debería devolvernos una promesa sin la validacion del link', (done) => { mdLinks('Pruebaa\\archivo2.md', { validate: false })
      .then((data) => {
        expect(data).toEqual(arrayUnvalided);
        done();
      })});
    it('Debería devolvernos un mensaje indicando que ingrese una ruta', (done) => { mdLinks('p')
      .catch((error) => {
        expect(error.message).toBe('Ruta incorrecta');
        done();
      })});

  });