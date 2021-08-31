
const {extractLink,linkValidate}= require('../src/links.js');
const path = require('path');
const process = require('process');



  const dataFile=[
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



const dataDirectory=[
    {
      href: 'https://ninoska2000.github.io/LIM015-data-lovers-nat/src/',
      text: 'data Gibli pages ',
      route: 'D:\\PROGRAMACION\\LIM015-md-links\\test\\pruebasTest\\carpeta2\\carpeta2.md'
    }
  ]

  const objectData=extractLink(`${process.cwd()}\\test\\pruebasTest\\carpeta1\\carpeta1.md`)


  const dataValidate=[
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




  describe('extractLink', () => {
    it('funcion para extraer los links de los archivos md', () => {
        expect(typeof extractLink).toBe('function')
    });
    it('debería retornar un array de objetos', () => {
        expect(typeof (extractLink("D:\\PROGRAMACION\\LIM015-md-links\\test\\pruebasTest\\carpeta1\\carpeta1.md"))).toBe('object')
    })
    it('debería retornar un array de objetos con href, text y file con ruta de un directorio', () => {
        expect(extractLink(`${process.cwd()}\\test\\pruebasTest\\carpeta1\\carpeta1.md`)).toEqual(dataFile)
    })
    it('debería retornar un array de objetos con href, text y file con ruta de un archivo', () => {
      expect(extractLink(`${process.cwd()}\\test\\pruebasTest\\carpeta2`)).toEqual(dataDirectory)
  })
  it('debería retornar un array de objetos con href, text y file con ruta de un archivo y estatus del archivo', () => {
    linkValidate(objectData).then(result=>{
        expect(result).toEqual(dataValidate)
    })
})
});





