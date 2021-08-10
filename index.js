module.exports = (verificRoute) => {
  // ...
};
 const chalk = require('chalk');
 const path = require('path');
 const fs = require('fs');
 const readline= require('readline');
 //const realpath = require('realpath');
//const const readline = require('readline');

//funcion ruta absoluta o relativa

const userRoute= process.argv[2];
//console.log( userRute)

function verificRoute (route){

if (path.isAbsolute(route)) {
  console.log("Es absoluta")
return route;
}else {

  console.log(path.resolve(route))
  console.log("la ruta no es absoluta")
  return( path.resolve(route));
  
}

}
verificRoute(userRoute);

// const ruteExists= (route);cler
// const rl= readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Dime tu nombre:", function(nombre){
//   console.log("Hola "  + nombre);
//   rl.close();
// });

 //console.log(chalk.blue('hola mundo'));


  // directory to check if exists
  const direction = './uploads';

//  // check if directory exists
// fs.access(direction, (err) => {
//     console.log(`Directorio ${err ? 'No existe' : 'Existe'}`);
//  });

   fs.readFile('./prueba/enlaces.md', 'utf-8', (err, data) => {
   if(err) {
      console.log('error: ', err);
    } else {
      console.log(data);
  }
  });


fs.lstat(userRoute, function(err, stats) {
  if (!err && stats.isDirectory()) {
    console.log("Es directorio")
    arreglosdeArchivos(userRoute)
  }
});

const arreglosdeArchivos = (userRoute) => {

  const respuesta= [];
 


  fs.readdir(userRoute, function (err, archivos) {
    if (err) {
    onError(err);
    return;
    }
    console.log(archivos);
    respuesta.push(archivos);
    });
    return respuesta;
 };

 

