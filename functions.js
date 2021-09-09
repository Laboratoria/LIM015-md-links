const fs = require('fs');
const path = require('path');

//----****----****--- LEYENDO CONTENIDO COMO ARHCIVO-****----**---** //
const pathTest = process.argv[2];
//console.log(pathTest);

 const pathExistFun = (pathPrueba) => {
    try{
        const pathExist2 = fs.existsSync(pathPrueba);
        return pathExist2;
       
    }catch(err){
        console.log(err.message);
    }
}
//pathExistFun(pathTest)

const pathIsAbsolute = (pathPrueba) => {
    const pathIsAbsolute = path.isAbsolute(pathPrueba);
    if(pathIsAbsolute){
    return pathPrueba
    }else{
        return pathResolveAbsolute(pathPrueba);
    }
   
}
//pathResolveAbsolute(pathTest)

const pathResolveAbsolute = (pathPrueba) => {
    try{
       const pathToAbs = path.resolve(pathPrueba); 
       return pathToAbs;
    }catch (e) {
        console.log(e.message)
    }
}
//pathResolveAbsolute(pathTest)

const listOfFiles = (pathPrueba) => {
   
    const directoryContent = fs.readdirSync(pathPrueba)
    const containerFiles = directoryContent.map(file => {
        if(path.extname(file) == ''){
            const pathPrueba2 = path.resolve(`${pathPrueba}/${file}`)
            return listOfFiles(pathPrueba2)
        }else{
            
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
pathIsFile(pathTest) 
 */
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
    'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\firstDirectory\\secondDIrectoy\\biblioteca.md',
    'C:\\Users\\nadia\\Documents\\GitHub\\MDLink\\LIM015-md-links2\\prueba\\rutaNotas.md"
  ] */
  

const getLinks = (filePath) => {
    
    let links = [];
    fileIsMd(filePath).forEach((file)=>{
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

/* console.log(getLinks(pathTest));
  getLinks(pathTest) */



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

  
 