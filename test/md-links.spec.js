const {
  validatePath,
  absolutePath,
  pathExists,
  readDir,
  readFile,
  mdValidation,
} = require('../src/api.js');

/* ***** Test validate path ***** */
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
    expect(pathExists('../LIM015-md-links')).toBe('../LIM015-md-links');
  });
});
describe('if directory exists', () => {
  it('should determinate if directory does not exists', () => {
    expect(pathExists('/Documents/GitHub/LIM015-md-links')).toBe('Path not found.');
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
      'testing_functions',
    ];
    expect(readDir('../LIM015-md-links')).toEqual(result);
  });
});

/* ***** Test read file content ***** */
describe('file Content', () => {
  it('should read directory content', () => {
    const result = '(https://es.wikipedia.org/wiki/Markdown)';
    expect(readFile('../LIM015-md-links/Testing_functions/testing_md.md')).toEqual(result);
  });
});

/* ***** Test file is a MD file ***** */
describe('Md file', () => {
  it('should check if a file is a Md file', () => {
    expect(mdValidation('../LIM015-md-links/Testing_functions/testing_md.md')).toBe(true);
  });
});
describe('Md file', () => {
  it('should check if a file is a Md file', () => {
    expect(mdValidation('../LIM015-md-links/src/api.js')).toBe(false);
  });
});
