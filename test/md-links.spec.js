const {
  validatePath,
  absolutePath,
  directory,
  readDir,
} = require('../src/api.js');

/* ***** Test validate path***** */
describe('Validate path', () => {
  it('should validate path', () => {
    expect(validatePath('../LIM015-md-links')).toBe(true);
  });
});

/* ***** Test absolute path // make absolute Path ***** */
describe('if path is absolute or not', () => {
  it('should determinate if path absolute', () => {
    expect(absolutePath('/Documents/GitHub/LIM015-md-links')).toBe('/Documents/GitHub/LIM015-md-links');
  });
});
describe('if path is absolute or not', () => {
  it('should determinate if path absolute, if not, resolve path to absolute', () => {
    expect(absolutePath('../LIM015-md-links')).toBe('C:\\Users\\Estudiante\\Documents\\GitHub\\LIM015-md-links');
  });
});

/* ***** Test path as Directory ***** */
describe('if directory exists', () => {
  it('should determinate directory exists', () => {
    expect(directory('../LIM015-md-links')).toBe('../LIM015-md-links');
  });
});
describe('if directory exists', () => {
  it('should determinate if directory does not exists', () => {
    expect(directory('/Documents/GitHub/LIM015-md-links')).toBe('Directory not found.');
  });
});

/* ***** Test Directory content ***** */
describe('directory Content', () => {
  it('should read directory content', () => {
    const result = [
      '.editorconfig',
      '.eslintrc',
      '.eslintrc.js',
      '.git',
      '.gitignore',
      'coverage',
      'index.js',
      'node_modules',
      'package-lock.json',
      'package.json',
      'README.md',
      'src',
      'test',
    ];
    expect(readDir('../LIM015-md-links')).toEqual(result);
  });
});
