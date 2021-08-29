#!/usr/bin/env node


const {mdlinks}= require('./mdLinks.js');

const process = require('process');

//$ NODE CLI.JS ./some/example.md --stats --validate
    //node cli.js
//   0  1        2                3        4   

//$ md-links ./some/example.md --validate
 



//console.log(process.argv);

const path=(process.argv[2]);


let options;

if(process.argv[3]==="--validate" && !process.argv[4]){
    options= {validate: true };

}else if(process.argv[3]==="--validate" && process.argv[4]==="--stats" ){
    options={ statAndValid: true };

}else if(process.argv[3]==="--stats"){
    options={ stats: true };

}else {
    options="{validate: false}";
}


//console.log(path);
//console.log(options);



mdlinks(path,options).then(result=>console.log(result));



//console.log("estas en cli");


//mdlinks("pruebas\\general.md").then(result=>console.log({result}));

//mdlinks("D:\\PROGRAMACION\\LIM015-md-links\\pruebas",{ validate: true }).then(result=>console.log(result)).catch(error=>console.log(error));

//mdlinks("D:\\PROGRAMACION\\LIM015-md-links\\pruebas",{ stats: true }).then(result=>console.log(result)).catch(error=>console.log(error));

//mdlinks("D:\\PROGRAMACION\\LIM015-md-links\\pruebas",{ statAndValid: true }).then(result=>console.log(result)).catch(error=>console.log(error));


