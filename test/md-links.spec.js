const  mdLinks  = require('../mdlinks.js');

describe('mdlinks() : function that validates options', () => {
    it('should be a function', () => {
        expect(typeof(mdLinks.mdLinks)).toBe('function');
    });

    it('{ validate: false } : should return href, text, file', () => {
    const route = 'C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\newFolder\\test4.md';
        const validateFalse = [
          {
             "file": "C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\newFolder\\test4.md",
             "href": "https://youtu.be/XBepfdg_FvY",
             "text": "ENTIRE Phantom Blood but ONLY Speedwagon💛 ",
          },
        ];
        expect(mdLinks.mdLinks(route, { validate: false })).resolves.toEqual(validateFalse);
    });
    it('{ validate: true} :  should return file, href, message, status, text', () => {
        const route = 'C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\newFolder\\test4.md';
        const validateTrue = [
         {
           "file": "C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\newFolder\\test4.md",
           "href": "https://youtu.be/XBepfdg_FvY",
           "message": "OK",
           "status": 200,
           "text": "ENTIRE Phantom Blood but ONLY Speedwagon💛 ",
         },
        ];
        expect(mdLinks.mdLinks(route, { validate: true })).resolves.toEqual(validateTrue);
    });
    
    it('should return an error message if the path does not exist', () => {
        const route = 'C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\newFolder\\test4.js'
        const result = 'This path does not exist';
        expect(mdLinks.mdLinks(route)).rejects.toEqual(result);
    });
});




// const mdLinks = require('../');


// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });
