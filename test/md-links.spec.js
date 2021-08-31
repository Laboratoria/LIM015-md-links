const {mdlinks} = require('../src/mdLinks.js');
const process = require('process');


const inputAbsolute=`${process.cwd()}\\test\\pruebasTest\\carpeta1\\carpeta1.md`;
const inputRelative="test\\pruebasTest\\carpeta1\\carpeta1.md";


const ouputAbsolute=[
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    route: 'D:\\PROGRAMACION\\LIM015-md-links\\test\\pruebasTest\\carpeta1\\carpeta1.md'
  },
  {
    href: 'https://noejs.org/',
    text: 'Node.js',
    route: 'D:\\PROGRAMACION\\LIM015-md-links\\test\\pruebasTest\\carpeta1\\carpeta1.md'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/what-is-npm',
    text: 'NPM',
    route: 'D:\\PROGRAMACION\\LIM015-md-links\\test\\pruebasTest\\carpeta1\\carpeta1.md'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
    text: 'Publicar packpage',
    route: 'D:\\PROGRAMACION\\LIM015-md-links\\test\\pruebasTest\\carpeta1\\carpeta1.md'
  }
]

const ouputvalidate=[
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    route: 'D:\\PROGRAMACION\\LIM015-md-links\\test\\pruebasTest\\carpeta1\\carpeta1.md',
    status: 200,
    message: 'OK'
  },
  {
    href: 'https://noejs.org/',
    text: 'Node.js',
    route: 'D:\\PROGRAMACION\\LIM015-md-links\\test\\pruebasTest\\carpeta1\\carpeta1.md',
    status: ' code error: 404',
    message: 'Fail'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/what-is-npm',
    text: 'NPM',
    route: 'D:\\PROGRAMACION\\LIM015-md-links\\test\\pruebasTest\\carpeta1\\carpeta1.md',
    status: 200,
    message: 'OK'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
    text: 'Publicar packpage',
    route: 'D:\\PROGRAMACION\\LIM015-md-links\\test\\pruebasTest\\carpeta1\\carpeta1.md',
    status: 200,
    message: 'OK'
  }
]


const valueBroken= { Total: 4, Unique: 4, broken: 0 };
const valueStats={ Total: 4, Unique: 4 };


describe('mdlinks',() => {

it('Al ingresar la ruta absoluta de una carpeta que contiene archivos debería retornar un array con los links encontrados dentro de la ruta', () => {
  mdlinks(inputAbsolute).then((respuesta) => {
    expect(respuesta).toEqual(ouputAbsolute)
  });
})

it('Al ingresar la ruta relativa de una carpeta que contiene archivos y carpetas debería retornar un array con los links encontrados dentro de la ruta', () => {
  mdlinks(inputRelative).then(result=>{
      expect(result).toEqual(ouputAbsolute)
  })
})

it('Al ingresar la ruta absoluta de una carpeta que contiene archivos y desea validar debería retornar un array con los links encontrados dentro de la ruta junto con las propiedades status y value', () => {
  mdlinks(inputRelative,{ validate: true }).then(result=>{
      expect(result).toEqual(ouputvalidate)
  })
})
it('Al ingresar la ruta absoluta de una carpeta que contiene archivos y desea validar debería retornar un un objeto con la propiedad total, unique y broken', () => {
  mdlinks(inputRelative,{ statAndValid: true }).then(result=>{
      expect(result).toEqual(valueBroken)
  })
})
it('Al ingresar la ruta absoluta de una carpeta que contiene archivos y desea validar debería retornar un objeto con la propiedad total y unique', () => {
  mdlinks(inputRelative,{ stats: true }).then(result=>{
      expect(result).toEqual(valueStats)
  })
})

})


//coos


/*
test('Al ingresar la ruta absoluta de una carpeta que contiene archivos y carpetas debería retornar un array con los links encontrados dentro de la ruta', (done) => {
  mdLinks(input2).then((respuesta) => {
    expect(respuesta).toEqual(ouput2);
    done();
  });
});

test('Al ingresar la ruta absoluta de un archivo debería retornar un array con los links encontrados dentro de la ruta', (done) => {
  mdLinks(input4).then((respuesta) => {
    expect(respuesta).toEqual(ouput4);
    done();
  });
});

test('Al ingresar la ruta absoluta de una carpeta que contiene archivos y desea validar debería retornar un array con los links encontrados dentro de la ruta junto con las propiedades status y value', (done) => {
  mdLinks(input, {validate: true}).then((respuesta) => {
    expect(respuesta).toEqual(ouput5);
    done();
  });
});
*/