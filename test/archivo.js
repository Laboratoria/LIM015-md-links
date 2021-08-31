
const {extractLink,linkValidate}= require('../src/links.js');


//console.log(extractLink(`${process.cwd()}\\test\\pruebaTest\\carpeta2`));

//console.log(extractLink("D:\\PROGRAMACION\\LIM015-md-links\\test\\pruebaTest\\carpeta2"));

//const objectData=extractLink ("D:\\PROGRAMACION\\LIM015-md-links\\test\\pruebasTest\\carpeta1\\carpeta1.md");

//const objectData=extractLink(`${process.cwd()}\\test\\pruebasTest\\carpeta1\\carpeta1.md`);

//linkValidate(objectData).then(result=>console.log(result)).catch(error=>console.log(error))


const {mdlinks} = require('../src/mdLinks.js');



mdlinks("test\\pruebasTest\\carpeta1\\carpeta1.md",{ stats: true }).then(result=>console.log({result})).catch(error=>console-log(error));



console.log("nura rama 2");
