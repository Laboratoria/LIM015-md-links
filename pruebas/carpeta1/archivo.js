
/*
//que siginifica los ...arr


const array=[1,2,3,4];
console.log(...array);


const objeto={
    primero:"uno",
    segundo:"2",
    tercero:[1,2,3]
};

//console.log(objeto);


const nuevoObjeto={
    ...array,
    nuevo1: "policias",
    nuevo2: [1,2,3]
}

//console.log(nuevoObjeto);
















//promesas son un objeto que eventualmente vamos a resolver y eventualmente vamos a acceder 
//ventajas : componibles 
//eventualmente pueden resolver INMEDIATAMENNTE O EVENTUALMENTE  en un fututo 
//PUEDEN SER ENCADENABLES 

//PROMESA QUE SE DISUELVE INMEDIATAMENGTE 

const p1=Promise.resolve(1)

console.log(p1);

//llamara a la promesa .then

p1.then(x=>console.log(x))

//podemos decir que retorne otro valor 

p1.then(x=>x+5).then(x=>console.log(x));

// prodemos meter otra promesa dentro de otra promesa


p1.then(x=>x+5).then(x=>Promise.resolve(x+5)).then(x=>console.log(x));


// si dentro de la cadena algo falla 

p1.then(x=>x+5)
.then(x=>Promise.resolve(x+5))
.then(x=>Promise.reject("algo sucedio mal"))
.then(x=>console.log("esto no se va llamar"))
.catch(e=>console.log(e)) 


const delayed = x=> new Promise ((res,rej)=> 
setTimeout(()=>
res(x),900)
);


delayed(7).then(x=>{
    console.log(x)
    return delayed(x+7)
})
.then(x=>console.log(x))
.then(x=>Promise.reject("hubo error "))
.catch(e=>console.log(e))





const fileslinkMD = (rutaAbs) => {

    let mdFilesArray=[];
    //leer el directorio 
    let filesDir = readDirectory(rutaAbs);
    filesDir.forEach(ele=> {

        let joinFile=path.join(rutaAbs,ele);

        console.log(joinFile);

        if (fs.statSync(joinFile).isFile() && path.extname(joinFile) === '.md') {

            mdFilesArray.push(joinFile);

        } else if ( fs.statSync(joinFile).isDirectory()){ 
            mdFilesArray=mdFilesArray.concat(fileslinkMD(joinFile));

        }
    });
    return mdFilesArray;
};

*/

