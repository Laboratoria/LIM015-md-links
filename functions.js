const fs = require('fs');
const path = require('path');

//----****----****--- LEYENDO CONTENIDO COMO ARHCIVO-****----**---** //
const pathTest = process.argv[2];
//console.log(pathTest);

const pathExistFun = (pathPrueba) => {
    try{
        const pathExist2 = fs.existsSync(pathPrueba);
            //console.log(`pathExistFun exist ${pathExist2}`);
        return pathExist2
    }catch(err){
        console.log(err.message);
    }
}
 //pathExistFun(pathTest);*/

 const pathIsAbsolute = (pathPrueba) => {
    const pathIsAbsolute = path.isAbsolute(pathPrueba);
     //console.log(`pahtAbsolute is ${pathIsAbsolute}`);
    return pathIsAbsolute
   
}
//pathIsAbsolute(pathTest)

const pathResolveAbsolute = (pathPrueba) => {
    try{
       const pathToAbs = path.resolve(pathPrueba); 
         console.log(`pathToAbs ${pathToAbs}`);
       return pathToAbs;
    }catch (e) {
        console.log(e.message)
    }
}
//pathResolveAbsolute(pathTest);

const pathIsFile = (pathPrueba) => {
    const readFile = fs.statSync(pathPrueba)
    //console.log(readFile.isFile())
    return  readFile.isFile()
}
//pathIsFile(pathTest)

const listOfFiles = (pathPrueba) => {
    const directoryContent = fs.readdirSync(pathPrueba)
    const containerFiles = directoryContent.map(file => {
        if(path.extname(file) == ''){
            const pathPrueba2 = path.join(pathPrueba, file)
            return listOfFiles(pathPrueba2)
        }else{
            return file;
        }
    })
    const joiningArrays = (containerFiles)=> {
        return containerFiles.reduce((acc, val) => Array.isArray(val) ? acc.concat(joiningArrays(val)) : acc.concat(val), []);
   }
  //console.log(joiningArrays(containerFiles))
return joiningArrays(containerFiles);
}
//listOfFiles(pathTest)
//console.log(listOfFiles(pathTest));
//[ 'cuaderno.txt', 'readme.md', 'app.js', 'biblioteca.md', 'oficina.txt', 'indexPrueba.js', 'read.txt', 'rutaNotas.md' ]


const fileIsMd= (pathPrueba)=>{
    const pathArrayFiles = listOfFiles(pathPrueba); 
    //['cuaderno.txt', 'readme.md', 'app.js', 'biblioteca.md', 'oficina.txt', 'indexPrueba.js', 'read.txt', 'rutaNotas.md']
    const containerMd = pathArrayFiles.filter((item)=>{
        if(path.extname(item) === '.md'){
            return true; // '.md'
        }
    })
//console.log(containerMd)
return containerMd
}
//fileIsMd(pathTest)
//console.log(fileIsMd(pathTest));
//[ 'readme.md', 'biblioteca.md', 'rutaNotas.md' ]



module.exports ={
    pathExistFun,
    pathIsAbsolute,
    pathResolveAbsolute,
    pathIsFile,
    listOfFiles,
    fileIsMd,
    
    
}
//}*/

  
 