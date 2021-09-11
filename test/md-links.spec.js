const {
  validatePath,
  pathExists,
  absolutePath,
  pathIsDir,
  readDir,
  mdValidation,
  // readFile,
  searchMdFile,
  getLinks,
} = require('../src/api.js');

/* ***** Test validate path ***** */
describe('Validate path', () => {
  it('should validate path', () => {
    expect(validatePath('../LIM015-md-links')).toBe(true);
  });
});

/* ***** Test Directory path exists ***** */
describe('If directory exists', () => {
  it('should determinate if directory exists', () => {
    expect(pathExists('../LIM015-md-links')).toBe('../LIM015-md-links');
  });
  it('should determinate if directory does not exists', () => {
    expect(pathExists('/Documents/GitHub/LIM015-md-links')).toBe('Path not found.');
  });
});

/* ***** Test absolute path // make absolute Path ***** */
describe('Path is absolute or not', () => {
  it('should determinate if path absolute', () => {
    expect(absolutePath('/Documents/GitHub/LIM015-md-links')).toBe('/Documents/GitHub/LIM015-md-links');
  });
  it('should determinate if path absolute, if not, resolve path to absolute', () => {
    expect(absolutePath('../LIM015-md-links')).toBe('C:\\Users\\Estudiante\\Documents\\GitHub\\LIM015-md-links');
  });
});

/* ***** Test path its a Directory ***** */
describe('Validate path for directory', () => {
  it('should validate path', () => {
    expect(pathIsDir('../LIM015-md-links')).toBe(true);
  });
});

/* ***** Test Directory content ***** */
describe('Directory Content', () => {
  it('should read directory content', () => {
    const result = [
      '.editorconfig', '.eslintrc',
      '.eslintrc.js', '.git',
      '.gitignore', 'coverage',
      'index.js', 'main.js',
      'node_modules', 'package-lock.json',
      'package.json', 'README.md',
      'src', 'test',
      'testing_functions',
    ];
    expect(readDir('../LIM015-md-links')).toEqual(result);
  });
});

/* ***** Test file its a MD file ***** */
describe('Md file', () => {
  it('should check if a file is a Md file', () => {
    expect(mdValidation('../LIM015-md-links/Testing_functions/testing_md.md')).toEqual(['../LIM015-md-links/Testing_functions/testing_md.md']);
  });
  it('should check if a file is not a Md file', () => {
    expect(mdValidation('../LIM015-md-links/src/api.js')).toStrictEqual([]);
  });
});

/* ***** Test read file content ***** */
// describe('File Content', () => {
//   it('should read file content', () => {
//     const result = `
//     - [Sitio oficial de npm (en inglés)](https://www.npmjs.com/)
// - [Sitio oficial roto (en inglés)](https://www.nmjs.com/)
//   `;
//     expect(readFile('../LIM015-md-links/Testing_functions/testing_md.md')).toStrictEqual(result);
//   });
// });

/* ***** Test search Md files ***** */
describe('MD files from directory', () => {
  it('should return Md files from a directory', () => {
    const result = [
      '..\\LIM015-md-links\\Testing_functions\\emptyMD.md',
      '..\\LIM015-md-links\\Testing_functions\\testing_md.md',
      '..\\LIM015-md-links\\Testing_functions\\test_md.md',
    ];
    expect(searchMdFile('../LIM015-md-links/Testing_functions')).toEqual(result);
  });
  it('should return Md files path', () => {
    const result = ['../LIM015-md-links/README.md'];
    expect(searchMdFile('../LIM015-md-links/README.md')).toEqual(result);
  });
  it('should return Md files path', () => {
    const result = [];
    expect(searchMdFile('../LIM015-md-links/src/api.js')).toEqual(result);
  });
});

/* ***** Test get links from Md files ***** */
describe('Links from MD files', () => {
  it('should return objects of links from Md files', () => {
    const result = [
      {
        href: 'https://www.npmjs.com/',
        text: 'Sitio oficial de npm (en inglés)',
        file: '../LIM015-md-links/Testing_functions/testing_md.md',
      },
      {
        file: '../LIM015-md-links/Testing_functions/testing_md.md',
        href: 'https://www.nmjs.com/',
        text: 'Sitio oficial roto (en inglés)',
      },
    ];
    expect(getLinks('../LIM015-md-links/Testing_functions/testing_md.md')).toStrictEqual(result);
  });
  it('should return objects of links from Md files', () => {
    const result = [];
    expect(getLinks('../LIM015-md-links/Testing_functions/emptyMD.md')).toEqual(result);
  });
});
