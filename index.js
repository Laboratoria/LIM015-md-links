/* Index.js exporta una función  mdlinks.js
El primer paso es leer un parámetro desde la terminal Node index.js /carpetA/ (“/carpeta")*/
//modulo, que permite acceder a las funciones para leer o escribir data del file sistem, y retorna un objeto.
const express = require('express');
const fs = require('fs');
const path = require('path');
//const app = "hello world"
// function for readFile//
function reading () {
  const path = './prueba/carpeta/readme.md';
  const prueba = fs.readFile(path,'utf8', (err, data) => {
    if (err) throw err; // return console.log('ERROR')
    //const productData = JSON.parse(data);
    console.log(data); // data = Contents of the file.//
  });
  return prueba;
}
console.log(reading());
/*function readfile (path, response) {
  fs.readFile(path, function (error,data){
  if (error){
response.writeHead(404);
response.writeHead('File not found');
  } else{
    response.writeHead(data);
  }
 response.end();
});
}*/

  
  






//'./prueba/read.txt'
/*const mdLinks = () => {
}
module.exports =  {
  mdLinks
};*/
/*const mdLinks = require('../prueba/mdLinks'); */



