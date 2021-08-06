const { validatePath, checkTypePath, listFilesMd, toPathAbsolute} = require('../src/index');


describe('validatePath(pathSent)', () => {

  it ("Deberia ser una funcion", () => {
    expect(typeof validatePath).toBe('function');
  });

  it("Should return true if path exist", () => {
    expect(validatePath('../../laboratoria')).toBe(true);
  });

  it("Should return false if it doesn't exist", () => {
    expect(validatePath('../../laborato')).toBe(false);
  });
});

describe('checkTypePath(pathSent)', () => {

  it ("It should be a function", () => {
    expect(typeof checkTypePath).toBe('function');
  });

  it("Should return true if it is directory", () => {
    const result = checkTypePath("/home/marga/test");
    expect(result).toBe(true);
  });

  it("Should return false if it is file", () => {
    const result = checkTypePath("/home/marga/test/hello-world.js");
    expect(result).toBe(false);
  });

});

describe('listFilesMd(list)', () => {
  it ("It should be a function", () => {
    expect(typeof listFilesMd).toBe('function');
  });
  it ("Should return list of files only md of directory", () => {
    expect(listFilesMd(['README.md', 'Vídeos','baby-steps.js','hello-world.js'])).toEqual(['README.md']);
  });
  it ("Should be null if you don't have .md files", () => {
    expect(listFilesMd(['Vídeos','baby-steps.js','hello-world.js'])).toEqual([]);
  });
});

describe('toPathAbsolute(boolean)', () => {
  it ("It should be a function", () => {
    expect(typeof toPathAbsolute).toBe('function');
  });
  // it ("Should return list of files with path absolute", () => {
  //   expect(toPathAbsolute(true)).toEqual([]);
  // });
  // it ("Should be null if you don't have .md files", () => {
  //   expect(toPathAbsolute(false)).toEqual([]);
  // });
});

describe('readFilesMd(list)', () => {
  it ("It should be a function", () => {
    expect(typeof readFilesMd).toBe('function');
  });
  // it ("Should return list of files with path absolute", () => {
  //   expect(toPathAbsolute(true)).toEqual([]);
  // });
  // it ("Should be null if you don't have .md files", () => {
  //   expect(toPathAbsolute(false)).toEqual([]);
  // });
});