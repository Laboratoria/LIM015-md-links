//const {mdLinks} = require('../index');

//const { text } = require('express');
const{ pathExistFun, pathIsAbsolute, pathResolveAbsolute, pathIsFile, listOfFiles,  fileIsMd, getLinks} = require('../functions')

const pathSpec = 'text.txt';
const pathDir = 'prueba';
const pathDirTwo = 'prueba\\firstDirectory\\secondDIrectoy\\biblioteca.md';
const routeLinks = 'prueba\\rutaNotas.md';

const arrayPathIsFile = ['C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\text.txt']
const arrayList = [
  'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\cuaderno.txt',
  'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\readme.md',
  'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\secondDIrectoy\\app.js',
  'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\secondDIrectoy\\biblioteca.md',
  'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\secondDIrectoy\\oficina.txt',
  'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\indexPrueba.js',
  'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\read.txt',
  'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md'
]
const filesMd = [
  'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\readme.md',
  'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\secondDIrectoy\\biblioteca.md',
  'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md'
] 
const containerLink =[
 { route: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md',  text: 'Promise - MDN',  link: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise'  },
 { route: 'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md',  text: 'How to Write a JavaScript Promise - freecodecamp (en inglés)',  link: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/'  }
];
/*describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});*/
describe('pathExistFun', () => {
  it('should be a function', () => {
    expect(typeof pathExistFun).toBe('function');
  });
  test('should be a exist path ', () => {
    expect(pathExistFun(pathSpec)).toBe(true);
  });

});

describe('pathIsAbsolute', () => {
  it('should be a function', () => {
    expect(typeof pathIsAbsolute).toBe('function');
  });
  test('should be a Absolute path ', () => {
    expect(pathIsAbsolute(pathSpec)).toBe('C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\text.txt');
    expect(pathIsAbsolute(pathDir)).toBe('C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba');
    expect(pathIsAbsolute(pathDirTwo)).toBe('C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\secondDIrectoy\\biblioteca.md');
  });

});

describe('pathResolveAbsolute', () => {
  it('should be a function', () => {
    expect(typeof pathResolveAbsolute).toBe('function');
  });
  test('should convert to absolute path ', () => {
    expect(pathResolveAbsolute(pathSpec)).toBe('C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\text.txt');
  });
});

describe('pathIsFile', () => {
  it('should be a function', () => {
    expect(typeof pathIsFile).toBe('function');
  });
  test('should show a file  ', () => {
    expect(pathIsFile(pathSpec)).toStrictEqual(arrayPathIsFile); 
  });
});

describe('listOfFiles', () => {
  it('should be a function', () => {
    expect(typeof listOfFiles).toBe('function');
  });
  test('should show a file list ', () => {
    expect(listOfFiles(pathDir)).toStrictEqual(arrayList); //toStrictEqual
  });
});

describe('fileIsMd', () => {
  it('should be a function', () => {
    expect(typeof fileIsMd).toBe('function');
  });
  test('should show a markdown file list ', () => {
    expect(fileIsMd(pathDir)).toStrictEqual(filesMd); 
  });
});
describe('getLinks', () => {
  it('should be a function', () => {
    expect(typeof getLinks).toBe('function');
  });
  test('should show a object ', () => {
    expect(getLinks(routeLinks)).toStrictEqual(containerLink); 
  });
});
