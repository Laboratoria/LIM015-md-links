const path = require('path');
const fs = require('fs');

const convertToAbsolutePath = (inputPath) => {
  if (path.isAbsolute(inputPath)){
      return inputPath;
  } else{
      return path.resolve(inputPath);
  }
};

statsObj = fs.statSync('./prueba/test.md');

const checkTypeObject = (inputPath) => {
    let arrayPathFiles = [];
    if (fs.statSync(inputPath).isDirectory()) {
      const readDirectory = fs.readdir(inputPath, (err,file) => {
          if (err) {
              return console.error(err);
          }
      })
     readDirectory.forEach(file => {
         const pathFile = path.join(inptPath, file);
         arrayPathFiles = arrayPathFiles.concat(checkTypeObject(pathFile))
     })
     return arrayPathFiles;

    } else {
        return console.log('it is a file', convertToAbsolutePath(inputPath))
    }
};
// console.log(checkTypeObject("LIM015-md-links\prueba\test.md"));
console.log(statsObj);












// module.exports = () => {
//   // ...
// };

// console.log("henlo :P");