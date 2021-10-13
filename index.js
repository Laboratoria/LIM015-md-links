const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

// function that detects if file/directory exists, returns a boolean
const existPath = (route) => fs.existsSync(route);

// function that detects if path is Absolute
const isPathAbsolute = (route) => path.isAbsolute(route);

// function that converts a relative path to an absolute path
const validatePath = (route) => path.resolve(route);  

//function that reads a directory
const readDirectory = (route) => fs.readdirSync(route);

// function that asks if a file ends with the extension '.md'
const isExtensionMD = (route) => (path.extname(route) === '.md');

// function that join 2 routes together
const joinPaths = (path1, path2) => path.join(path1,path2);

// function that returns all the links from the file
const fileContent = (route) => fs.readFileSync(route, 'utf8');

// Recursive function : opens a directory and reads all paths '.md'
const checkPath = (path) => {
    statsObj = fs.statSync(path); 
    let arrayAllMD = [];
    if ((statsObj.isFile() && isExtensionMD(path))) {
        arrayAllMD.push(path);
    } else if (statsObj.isDirectory()) {
        // else if the file is inside a directory
        const arrayPaths = readDirectory(path);
        arrayPaths.forEach(pathX => {
            const pathsDir = joinPaths(path,pathX);
            const savePaths = checkPath(pathsDir);
            arrayAllMD = arrayAllMD.concat(savePaths);
        });
    }
    return arrayAllMD;
};


//function that gets the urls of the files    
const getAllLinks = (route) => {
    //regex 
    const regExp = /\[(.*)\]\(((?:\/|https?:\/\/).*)\)/gi;
    const regExpLink = /\(((?:\/|https?:\/\/).*)\)/g;
    const regExpText = /\[(.*)\]/g;
    
    const allLinks = fileContent(route).match(regExp);
    const arrayAllLinks = [];
    if(allLinks !== null ) {
        allLinks.forEach((link) => {
            const objLinks = {
                href : link.match(regExpLink).join().slice(1,-1),
                text : link.match(regExpText).join().slice(1,-1),
                file : route,
            };
            arrayAllLinks.push(objLinks);
        });
        // console.log(arrayAllLinks);
    };
    return arrayAllLinks;
  };
 
 // function that validates links
  const validateLinks = (arrLinks) => {
      const arrLinksStatus = arrLinks.map((link) => {
          return fetch(link.href)
          .then ((resultLink) => {
              const statusData = {
                  href : link.href,
                  file : link.file,
                  status : resultLink.status,
                  message : resultLink.status > 199 && resultLink.status < 400 ? 'OK' : 'Fail',
                  text : (link.text.slice(0,50))
              };
              return statusData
          })
          .catch((error) =>{
              const statusDataErr = {
                href : link.href,
                file : link.file,
                status : `Fail ${error.message}`,
                message : 'No status',
                text : (link.text.slice(0,50))
            };
            return statusDataErr;
          });
      });
      return Promise.all(arrLinksStatus);
  };


//   const demogetAllLinks = getAllLinks('C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\test.md')
//   console.log(demogetAllLinks);
//   const demovalidateLinks = validateLinks(demogetAllLinks)
//   console.log(demovalidateLinks);


 module.exports = {
     existPath, 
     isPathAbsolute,
     validatePath,
     readDirectory,
     isExtensionMD,
     joinPaths,
     fileContent,
     checkPath,
     getAllLinks,
     validateLinks
 };