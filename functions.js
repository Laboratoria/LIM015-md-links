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
     //
        console.log(`pathToAbs ${pathToAbs}`);
       return pathToAbs;
    }catch (e) {
        console.log(e.message)
    }
}
pathResolveAbsolute(pathTest);

const pathIsFile = (pathPrueba) => {
    const readFile = fs.statSync(pathPrueba)
    console.log(readFile.isFile())
    return  readFile.isFile()
}
pathIsFile(pathTest)

const pathIsDirectory = (pathPrueba) => {
    const directoryContent = fs.readdirSync(pathPrueba)
        //console.log(directoryContent);
        const containerDir =[];
        directoryContent.forEach(file => {
        containerDir.push(file)
         /* if (path.extname(file) == ".md") // CONOCIENDO EL TIPO DE EXTENSIÓN //
        console.log(file)*/
   })
   console.log(containerDir)
   return containerDir
   
}
//pathIsDirectory(pathTest)
// [ 'firstFile', 'indexPrueba.js', 'read.txt', 'rutaNotas.md' ]

const fileExtention = (pathPrueba)=>{

    const pathArrayDir =pathIsDirectory(pathPrueba); //[ 'firstFile', 'indexPrueba.js', 'read.txt', 'rutaNotas.md' ]
    const containerExt =[];
    for(let i=0; i< pathArrayDir.length; i++){
        console.log(pathArrayDir[i]) 
    const extension = path.extname(pathArrayDir[i])
        if (extension == '.md'){
            containerExt.push(pathArrayDir[i])
        //}else{//extention !== '.md'
          //  const extNoMd = [];
          //  extNoMd.push(pathArrayDir[i])
           // console.log(extNoMd)
       //console.log('it does a file but it does not a markdown')
       // return 'it does a file but it does not a markdown'
        }
    }
   //console.log(containerExt)
   //return containerExt
}
//fileExtention(pathTest)


const pathToRead = (path)=> {
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
        console.log(`reading directory: `);
        
        console.log(data)
        });
    } catch (err) {
        console.log(err.message);
    }
}

module.exports ={
    pathExistFun,
    pathIsAbsolute,
    pathResolveAbsolute,
    pathIsFile,
    pathIsDirectory,
    fileExtention
    
}
//}*/

  
 