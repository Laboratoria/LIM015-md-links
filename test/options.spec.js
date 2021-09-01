const options = require('../src/option.js');

const input = [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export',
    text: 'Import Export',
    file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\prueba1.md',
    status: 200,
    message: 'OK'
  },
  {
    href: 'https://regexr.com/',
    text: 'Regex',
    file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\prueba1.md',
    status: 200,
    message: 'OK'
  },
  {
    href: 'https://regexr.com/',
    text: 'Regex',
    file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\prueba1.md',
    status: 200,
    message: 'OK'
  },
  {
    href: 'https://www.figma.com/blog/1',
    text: 'figma',
    file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\prueba1.md',
    status: 404,
    message: 'fail'
  }
];

describe('Total de Links y unicos', () => {  
  it('Debe dar el valor de links totales y links unicos', () => {  
    const output = 'Total: 4\nUnique: 3';
    expect(options.totalAndUnique(input)).toEqual(output);
  });
});

describe('Status fail', () => {  
  it('Debe dar el total de links con status fail', () => {  
    const output = 'Broken: 1';
    expect(options.totalLinksBroken(input)).toEqual(output);
  });
});
