
const {extractLink}= require('../src/links.js');



//console.log(extractLink(`${process.cwd()}\\test\\pruebaTest\\carpeta2`));

//console.log(extractLink("D:\\PROGRAMACION\\LIM015-md-links\\test\\pruebaTest\\carpeta2"));

//const objectData=extractLink ("D:\\PROGRAMACION\\LIM015-md-links\\test\\pruebasTest\\carpeta1\\carpeta1.md");

const objectData=extractLink(`${process.cwd()}\\test\\pruebasTest\\carpeta1\\carpeta1.md`);

console.log(objectData);

//console.log(`${process.cwd()}`);

//console.log(__dirname);
//console.log(`${process.cwd()}\\test\\pruebasTest\\carpeta2`);

