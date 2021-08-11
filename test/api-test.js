//const mdLinks = require('../');

const pathAbs = require("./src/api.js");


describe('pathAbs', () => {
  it('is a function', () => {
    expect(typeof filterRegion).toBe('function');
  });

  it ('Deberia retornar Johto para filterRegion', () => {
    const result = pathAbs('johto',datatest);
    expect (result[0].name).toEqual('celebi');
  })

});