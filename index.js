const {

  findePaths,
  itExist,
  convertPath,
  findLinks,
  rutaFija,
  
} = require("./src/funciones");

const { validate } = require("./src/fetch");


function mdLinks(path, options) {
  return new Promise((resolve, reject) => {
    if (path) {
      const pathConverted = convertPath(path);
      if (itExist(pathConverted)) {
        const FilesFinded = findePaths(pathConverted);
        if (FilesFinded.length != 0) {
          const filesReader = findLinks(FilesFinded);
          
         if (filesReader.length != []) {
            if (options.validate) {
              console.log(filesReader)
              resolve(
                validate(filesReader)
                  .then((res) => res)
                  .catch((err) => err)
              );
            } else {
              resolve(filesReader);
            }
          } else {
           resolve("This path hasnt links");
          }
        } else {
          resolve("This path hasnt files or directories");
        }
      } else {
        resolve("Path doesnt exist");
      }
    } else {
      resolve("Enter a path please");
    }
    
   });
   
}


mdLinks("../test",{validate:true}).then(res=>(console.log(res)));




//const link= findLinks(rutaFija);
//console.log(element);
//validate(element).then((res)=>console.log(res,50));


//Promise.all(validate(findLinks(rutaFija))).then((res)=>console.log(res));
//Promise.all(validate(findLinks(rutaFija))).then((res)=>console.log(resolve(res)));
module.exports = {
  mdLinks,
};