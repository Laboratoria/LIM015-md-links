const fs = require('fs');
const path = require('path');

//----****----****--- LEYENDO CONTENIDO COMO ARHCIVO-****----**---** //
const pathToFile = process.argv[2];
//console.log(pathToFile);
//pathToFile = './prueba/firstFile/readme.md';

function pathToRead (){
// Use fs.readFile() method to read the file
fs.readFile('Demo.txt', 'utf8', function(err, data){
    console.log(data);
});
  
//console.log('readFile called');
}
//pathToRead()

function fileToRead(path){
    try{
        //if (fs.statSync(path).isFile()) {
        fs.readFile(path,'utf8', (err, data) => {
            console.log(`reading file: `);
            console.log(data);
        })
    } catch (err) {
        console.log(err.message);
    }
}
     //} else {
function directoyToRead (path){
    try{
        fs.readdir(path,'utf8',(err, data) => {
       // if (err) {
       //  console.log(err.message);
       // } else{
        console.log(`reading directory: `);
        //let result = data;
        console.log(data)
        //}
        });
    } catch (err) {
        console.log(err.message);
    }
}


module.exports = {
    fileToRead,
    directoyToRead,
    //existPath
}