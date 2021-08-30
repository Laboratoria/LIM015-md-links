jest.mock('node-fetch');
const fetch = require('node-fetch');
const { getStatusLinks } = require('../src/api.js');

describe('Validate link', () => {
  test('OK', () => {
    const input = [
      {
        href: 'https://jestjs.io/es-ES/docs/manual-mocks',
        text: 'Moks',
        file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\directorio2\\file5.md'       
      }
    ];
    const output = [
      {
        href: 'https://jestjs.io/es-ES/docs/manual-mocks',
        text: 'Moks',
        file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\directorio2\\file5.md',
        status: 200,
        message: 'OK',
      }
    ];

    fetch.mockImplementation(() => Promise.resolve({
      status: 200
    }));
    return getStatusLinks(input).then((res) => {
      expect(res).toEqual(output);
    });
  });

  test('fail', () => {
    const input = [
      {
        href: 'https://www.figma.com/blog/1',
        text: 'figma',
        file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\fileFail.md'
      }
    ];
    const output = [
      {
        href: 'https://www.figma.com/blog/1',
        text: 'figma',
        file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\fileFail.md',
        status: 404,
        message: 'fail'
      }
    ];

    fetch.mockImplementation(() => Promise.resolve({
      status: 404
    }));
    return getStatusLinks(input).then((res) => {
      expect(res).toEqual(output);
    });
  });

});
