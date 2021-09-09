const fs = require('fs');
const path = require('path');

//----****----****--- LEYENDO CONTENIDO COMO ARHCIVO-****----**---** //
const pathTest = process.argv[2];
//console.log(pathTest);

/* const pathExistFun = (pathPrueba) => {
    try{
        const pathExist2 = fs.existsSync(pathPrueba);
            //console.log(`pathExistFun exist ${pathExist2}`);
        return pathExist2
    }catch(err){
        console.log(err.message);
    }
} */
 //pathExistFun(pathTest);*/

 const pathExistFun = (pathPrueba) => {
    try{
        const pathExist2 = fs.existsSync(pathPrueba);
            //console.log(`pathExistFun exist ${pathExist2}`);
        return pathExist2;
       
    }catch(err){
        console.log(err.message);
    }
}

/*  const pathIsAbsolute = (pathPrueba) => {
    const pathIsAbsolute = path.isAbsolute(pathPrueba);
     //console.log(`pahtAbsolute is ${pathIsAbsolute}`);
    return pathIsAbsolute
   
}
//pathIsAbsolute(pathTest) */

const pathIsAbsolute = (pathPrueba) => {
    const pathIsAbsolute = path.isAbsolute(pathPrueba);
     //console.log(`pahtAbsolute is ${pathIsAbsolute}`);
    if(pathIsAbsolute==true){
    return pathPrueba
    }else{
        return pathResolveAbsolute(pathPrueba);
    }
   
}

const pathResolveAbsolute = (pathPrueba) => {
    try{
       const pathToAbs = path.resolve(pathPrueba); 
        // console.log(`pathToAbs ${pathToAbs}`);
       return pathToAbs;
    }catch (e) {
        console.log(e.message)
    }
}
//pathResolveAbsolute(pathTest);

/* const pathIsFile = (pathPrueba) => {
    const readFile = fs.statSync(pathPrueba)
    //console.log(readFile.isFile())
    return  readFile.isFile()
}
//pathIsFile(pathTest) */


const listOfFiles = (pathPrueba) => {
   
    const directoryContent = fs.readdirSync(pathPrueba)
    const containerFiles = directoryContent.map(file => {
        if(path.extname(file) == ''){
            const pathPrueba2 = path.resolve(`${pathPrueba}/${file}`)

            return listOfFiles(pathPrueba2)
        }else{
            //console.log(path.resolve(`${pathPrueba}/${file}`),78)
            return pathIsAbsolute(path.resolve(`${pathPrueba}/${file}`));
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

const pathIsFile = (pathPrueba) => {
    const readFile = fs.statSync(pathPrueba)
    //console.log(readFile.isFile())
    if(readFile.isFile()){
     
        return pathIsAbsolute(pathPrueba).split(',')
    }else{
        
        return listOfFiles(pathIsAbsolute(pathPrueba))
    }

}   
/* console.log(pathIsFile(pathTest) );
pathIsFile(pathTest)  */

/* const fileIsMd= (pathPrueba)=>{
    const pathArrayFiles = listOfFiles(pathPrueba); 
    //['cuaderno.txt', 'readme.md', 'app.js', 'biblioteca.md', 'oficina.txt', 'indexPrueba.js', 'read.txt', 'rutaNotas.md']
    const containerMd = pathArrayFiles.filter((item)=>{
        if(path.extname(item) === '.md'){
            return true; // '.md'
        }
    })
//console.log(containerMd)
return containerMd
} */
//fileIsMd(pathTest)
//console.log(fileIsMd(pathTest));
//[ 'readme.md', 'biblioteca.md', 'rutaNotas.md' ]


const fileIsMd= (pathPrueba)=>{
 
    const containerMd =[]
    pathIsFile(pathPrueba).filter((item)=>{
        
    //['cuaderno.txt', 'readme.md', 'app.js', 'biblioteca.md', 'oficina.txt', 'indexPrueba.js', 'read.txt', 'rutaNotas.md']
    if(path.extname(item) === '.md'){
            const casa =item
            containerMd.push(casa)
        }
    })
    
 return containerMd
}
/* fileIsMd(pathTest)
console.log(fileIsMd(pathTest)); */


/*[
    'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\readme.md',
    'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\secondDIrectoy\\biblioteca.md'
  ] 134*/
  

const getLinks = (filePath) => {
    
    let links = [];
    console.log(fileIsMd(filePath),150)
   fileIsMd(filePath).forEach((file)=>{
       const prueba = process.cwd(file)
       console.log(file,153)

     const content = fs.readFileSync(file, 'utf-8');
    const regexMdLinks =  /\[([^\[]+)\](\(http.*\))/gm;
    const matches = content.match(regexMdLinks);
   
    if(matches === null){
      return " this file does not have any links";
    }else{
      
      const singleMatch = /\[([^\[]+)\]\((.*)\)/;
      for (let i = 0; i < matches.length; i++) {
        let text = singleMatch.exec(matches[i]);
        links.push({'route': file, 'text': text[1], 'link': text[2]});
      }
      return links;
    }

})
return links;
}

console.log(getLinks(pathTest));
  getLinks(pathTest)

/* const onlyMdFiles =  fileIsMd(pathIsAbsolute(pathTest));
const casa = [];
onlyMdFiles.forEach((filePath) => {
    if (filePath != '-4058')
     return    casa.push(getLinks(filePath))
   
   
})
console.log( casa)  */
 
 /*  const saveArrObj = [
    {
      href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
      text: 'recurso',
      file: 'README.md'
    }
    /* {
      href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
      text: 'Linea de comando CLI',
      file: 'README.md'
    },
    {
      href: 'https://nodejs.org/api/path.html',
      text: 'Path',
      file: 'README.md'
    },
    {
      href: 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
      text: 'Leer un directorio',
      file: 'README.md'
    } 
  ]  */
 // getLinks(saveArrObj).then((res)=>console.log(res,'VALIDATE STATUS'));
  

//retornar:
/*{href: "http",
text: " Texto que aparecía dentro del link ",
file:"Ruta del archivo donde se encontró el link "}*/

module.exports ={
    pathExistFun,
    pathIsAbsolute,
    pathResolveAbsolute,
    pathIsFile,
    listOfFiles,
    fileIsMd,
    getLinks
    
    
}
//}*/

  
 