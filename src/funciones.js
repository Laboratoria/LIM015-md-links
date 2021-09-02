
const rutaFija= './rutaS'

const { readdirSync, readFileSync, statSync, existsSync } = require("fs");
const { isAbsolute, resolve, extname } = require("path");

//Regular Expressions
const regexLinkText = /\[([\w\s\d.|À-ÿ()]+)\]/gim;
const regexLinkLink =/\(((?:\/|https?:\/\/)[\w\d\s./?=#&_%~,\-.:]+)\)/gim;
const regexLinkFull = /\[([\w\s\d.|()À-ÿ]+)\]\([?:\/|https?:?\/\/]+[\w\d\s./?=#-&_%~,\-.:]+\)/gim;


//Short functions
const itExist = (path) => existsSync(path);
const PathDirectory = (path) => statSync(path).isDirectory();
const PathFile = (path) => statSync(path).isFile();
const readDir = (path) => readdirSync(path);
const readFile = (path) => readFileSync(path, "utf8");

//function 1
//Convert path and normalize
const convertPath = (path) => isAbsolute(path) ? path : resolve(path) 

function findePaths(path) {
    let filesFinded = [];
   
    if (PathFile(path)) {
        if (extname(path) == ".md") filesFinded.push(path)
        return filesFinded;
    }
      const routes = readDir(path);  
      if (routes.length != 0) {
        routes.forEach((file) => {
          let files = findePaths(path + `/${file}`);
          filesFinded = filesFinded.concat(files);          
        });
      }
    
    return filesFinded;
    }

function findLinks(paths) {
  let oneLink;
  let someLink;
  let propertiesLink = [];
  //const pathsL= findePaths(paths)


  paths.forEach((path) => {

    let compareReg = readFile(path).match(regexLinkFull);

    if (compareReg !== null) {
      
      let count = compareReg.length;
      
      if (count == 1) {
        compareReg = compareReg.toString();
        let href = compareReg.match(regexLinkLink).join().slice(1, -1); 
        
        let text = compareReg.match(regexLinkText).join().slice(1, -1)

        oneLink = {
          'href': href,
          'text': text,
          'file': path,
        };
        propertiesLink.push(oneLink);
      }
      if (count > 1) {
        compareReg.forEach((link) => {
          
          let href = link.match(regexLinkLink).join().slice(1, -1);

          let text = link.match(regexLinkText).join().slice(1, -1);
 
          someLink = {
            'href': href,
            'text': text,
            'file': path,
          };
          propertiesLink.push(someLink);
        });
      }
    }
  });
  return propertiesLink;
}


module.exports = {
  convertPath,
  findePaths,
  readDir,
  PathDirectory,
  readFile,
  itExist,
  findLinks,
  rutaFija
};