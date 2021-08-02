const {validateRoute, listFiles, listFilesMd} = require('../cli');


describe('validateRoute(routeCommand)', () => {

  it ("Deberia ser una funcion", () => {
    expect(typeof validateRoute).toBe('function');
  });

  it("Should return absolute path if it exists", () => {
    expect(validateRoute('../../laboratoria')).toBe('/home/marga/laboratoria');
  });

  it("Should return null if it doesn't exist", () => {
    expect(validateRoute('../../laborato')).toBe(null);
  });
});

describe('listFiles(routeAbsolute)', () => {

  it ("It should be a function", () => {
    expect(typeof listFiles).toBe('function');
  });

  it("Should return list of files", () => {
    const result = listFiles("/home/marga/test");
    expect(result).toEqual([ 'README.md', 'hello-world.js', 'mdlinks', 'prueba', 'test.md' ]);
  });

  it("If it is a file it should return an array with that file", () => {
    const result = listFiles("/home/marga/test/hello-world.js");
    console.log(result)
    expect(result).toEqual(['hello-world.js']);
  });

});

describe('listFilesMd(list)', () => {

  it ("It should be a function", () => {
    expect(typeof listFilesMd).toBe('function');
  });
  it ("Should return list of files only extension .md", () => {
    expect(listFilesMd(['README.md', 'Vídeos','baby-steps.js','hello-world.js'])).toEqual(['README.md']);
  });
  it ("Should be null if you don't have .md files", () => {
    expect(listFilesMd(['Vídeos','baby-steps.js','hello-world.js'])).toEqual([]);
  });
});