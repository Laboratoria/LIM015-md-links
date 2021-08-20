/*const mdLinks = require('../');*/
const { validarRuta, rutaAbsolut, esDirectorio, convertiraAbsolut, isArchivo, esArchivoMd, }= require("../src/md-links.js");
//const{verArchivo}= require("../src/md-links.js");
//const {fs} = require("fs");
describe('mdLinks', () => {

  //Verificar si ruta existe
  it('should...', () => {
    expect(validarRuta("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src\\cli.js")).toBe(true)
   });
   //Verificar si ruta no existe
  it('should...', () => {
   expect(validarRuta("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src\\cl.js")).toBe(false)
  });

   //prueba2 ver si es función//
   it("should...", ()=>{
     expect(typeof isArchivo).toBe("function")
   })
   /*it('should...', (done) => {
     try { expect(isArchivo("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\README.md")).toBe(true)
          done()

     } catch (e){done(e);}
   });
   //tiene que volver falso cuando no es archivo
   it('should...', (done) => {
    try { expect(isArchivo("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\READ.md")).toBe(false)
         done()

    } catch (e){done(e);}
  });*/

  //si es ruta absoluta dar true
  it('should...', () => {
    expect(rutaAbsolut("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src\\cli.js")).toBe(true)
   });
   //si No es ruta absoluta dar false
  it('should...', () => {
   expect(rutaAbsolut("src\\cl.js")).toBe(false)
  });
  
   //tiene que volver true cuando es directorio o carpeta
   it('should...', () => {
     expect(esDirectorio("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src")).toBe(true)
    });
    //tiene que volver false cuando no es directorio o carpeta
   it('should...', () => {
    expect(esDirectorio("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\README.md")).toBe(false)
   });
   
  //Verificar si convierte ruta relativa o directorio/carpeta a ruta absoluta
  it('should...', () => {
    expect(convertiraAbsolut("src\\cli.js")).toBe("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src\\cli.js")
    });
    //tiene que volver true cuando es archivo
  it('should...', () => {
    expect(isArchivo("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\README.md")).toBe(true)
   });
   //tiene que volver falso cuando no es archivo
   it('should...', () => {
     expect(isArchivo("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src")).toBe(false)
    });

  //tiene que volver true cuando es .md
  it('should...', () => {
    expect(esArchivoMd("C:\Users\N18\OneDrive\Escritorio\Archivos\LIM015-md-links\README.md")).toBe(true)
    });
  //tiene que volver falso cuando no es .md
   it('should...', () => {
     expect(esArchivoMd("C:\Users\N18\OneDrive\Escritorio\Archivos\LIM015-md-links\src\cli.js")).toBe(false)
    });
});