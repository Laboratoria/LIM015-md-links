const {
  validatePath,
  absolutePath,
  pathIsDir,
  readDir,
  mdValidation,
  readFile,
  searchMdFile,
  // mdFileLinks,
} = require('../src/api.js');

/* ***** Test validate path ***** */
describe('Validate path', () => {
  it('should validate path', () => {
    expect(validatePath('../LIM015-md-links')).toBe(true);
  });
});

/* ***** Test absolute path // make absolute Path ***** */
describe('Path is absolute or not', () => {
  it('should determinate if path absolute', () => {
    expect(absolutePath('/Documents/GitHub/LIM015-md-links')).toBe('/Documents/GitHub/LIM015-md-links');
  });
});
describe('If path is absolute or not', () => {
  it('should determinate if path absolute, if not, resolve path to absolute', () => {
    expect(absolutePath('../LIM015-md-links')).toBe('C:\\Users\\Estudiante\\Documents\\GitHub\\LIM015-md-links');
  });
});

/* ***** Test path its a Directory ***** */
describe('Validate path', () => {
  it('should validate path', () => {
    expect(pathIsDir('../LIM015-md-links')).toBe(true);
  });
});

/* ***** Test Directory content ***** */
describe('Directory Content', () => {
  it('should read directory content', () => {
    const result = [
      '.editorconfig',
      '.eslintrc',
      '.eslintrc.js',
      '.git',
      '.gitignore',
      'coverage',
      'index.js',
      'main.js',
      'node_modules',
      'package-lock.json',
      'package.json',
      'README.md',
      'src',
      'test',
      'testing_functions',
    ];
    expect(readDir('../LIM015-md-links')).toEqual(result);
  });
});

/* ***** Test read file content ***** */
describe('File Content', () => {
  it('should read file content', () => {
    const result = '- [Sitio oficial de npm (en inglés)](https://www.npmjs.com/)';
    expect(readFile('../LIM015-md-links/Testing_functions/testing_md.md')).toEqual(result);
  });
});

/* ***** Test file is a MD file ***** */
describe('Md file', () => {
  it('should check if a file is a Md file', () => {
    expect(mdValidation('../LIM015-md-links/Testing_functions/testing_md.md')).toEqual(['../LIM015-md-links/Testing_functions/testing_md.md']);
  });
});
describe('Md file', () => {
  it('should check if a file is not a Md file', () => {
    expect(mdValidation('../LIM015-md-links/src/api.js')).toStrictEqual([]);
  });
});

/* ***** Test search Md files ***** */
describe('MD files', () => {
  it('should return Md files path', () => {
    const result = ['..\\LIM015-md-links\\README.md'];
    expect(searchMdFile('../LIM015-md-links')).toEqual(result);
  });
});
describe('MD files', () => {
  it('should return Md files from a directory', () => {
    const result = [
      '..\\LIM015-md-links\\Testing_functions\\testing_md.md',
      '..\\LIM015-md-links\\Testing_functions\\test_md.md',
    ];
    expect(searchMdFile('../LIM015-md-links/Testing_functions')).toEqual(result);
  });
});
