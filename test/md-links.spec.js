//const {mdLinks} = require('../index');
const{ pathExistFun, pathIsAbsolute, pathResolveAbsolute, pathIsFile} = require('../functions')

const pathSpec = 'text.txt';
const pathDir = './prueba/'
const arrayList = [ 'firstFile', 'indexPrueba.js', 'read.txt', 'rutaNotas.md' ];
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
    expect(pathIsAbsolute(pathSpec)).toBe(false);
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
  test('should show a file list ', () => {
    expect(pathIsFile(pathSpec)).toBe(true); //toStrictEqual
    expect(pathIsFile(pathDir)).toBe(false); //toStrictEqual
  });
});

/*describe('pathIsDirectory', () => {
  it('should be a function', () => {
    expect(typeof pathIsFile).toBe('function');
  });
  test('should show a file list ', () => {
    expect(pathIsDirectory(pathSpec)).toStrictEqual(true); //toStrictEqual
    expect(pathIsFile(pathSpec)).toStrictEqual(true); //toStrictEqual
  });
});*/