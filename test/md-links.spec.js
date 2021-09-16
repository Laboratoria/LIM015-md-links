/* eslint-disable max-len */
// const fetch = require('node-fetch'); // allows you to asynchronously request for a resource.
const fetch = require('../__mocks__/mock_fetch.js');

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
  getStatus,
} = require('../src/api.js');

const data = [
  {
    href: 'https://www.npmjs.com/',
    text: 'Sitio oficial de npm (en inglés)',
    file: 'C:\\Users\\Estudiante\\Documents\\GitHub\\LIM015-md-links\\testing_functions\\testing_md.md',
  },
  {
    href: 'https://www.nmjs.com/',
    text: 'Sitio oficial roto (en inglés)',
    file: 'C:\\Users\\Estudiante\\Documents\\GitHub\\LIM015-md-links\\testing_functions\\testing_md.md',
  },
];

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
      'testing_functions', '__mocks__',
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

describe('fetch data', () => {
  it('should fetch data', () => {
    const output = [
      {
        href: 'https://www.npmjs.com/',
        text: 'Sitio oficial de npm (en inglés)',
        file: 'C:\\Users\\Estudiante\\Documents\\GitHub\\LIM015-md-links\\testing_functions\\testing_md.md',
        status: 200,
        mesagge: 'Ok',
      },
      {
        href: 'https://www.nmjs.com/',
        file: 'C:\\Users\\Estudiante\\Documents\\GitHub\\LIM015-md-links\\testing_functions\\testing_md.md',
        mesagge: 'request to https://www.nmjs.com/ failed, reason: getaddrinfo ENOTFOUND www.nmjs.com',
        status: undefined,
        text: 'Sitio oficial roto (en inglés)',
      },
    ];
    fetch.mockResolvedValue(data);
    return getStatus(data).then((e) => {
      expect(e).toEqual(output);
    });
    // .then((response) => expect(response).tobe(output))
    // .catch((error) => error));
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

/* ***** Test get links status from Md files ***** */
/*
describe('Links from MD files', () => {
  it('should return status links from Md files', () => {
    const output = [
      {
        href: 'https://www.npmjs.com/',
        text: 'Sitio oficial de npm (en inglés)',
        file: 'C:\\Users\\Estudiante\\Documents\\GitHub\\LIM015-md-links\\testing_functions\\testing_md.md',
        status: 200,
        mesagge: 'Ok',
      },
      {
        href: 'https://www.nmjs.com/',
        file: 'C:\\Users\\Estudiante\\Documents\\GitHub\\LIM015-md-links\\testing_functions\\testing_md.md',
        mesagge: 'Fail',
        status: 'request to https://www.nmjs.com/ failed, reason: getaddrinfo ENOTFOUND www.nmjs.com',
        text: 'Sitio oficial roto (en inglés)',
      },
    ];
    // console.log(getStatus(input).resolves.tobe(output)); NO SIRVE RESOLVES(UNDEFINEd)
    // console.log(output);
    // expect(getStatus(data)
    //   .then((response) => expect(response).tobe(output))
    //   .catch((error) => error));
    expect(fetch.mockResolvedValue(data)
      .then((response) => expect(getLinks(response)).tobe(output))
      .catch((error) => error));
    // expect(getStatus(input)).resolves.toBe(output);
    // return output.then(getStatus(input).toEqual(output));
  });
});
*/
