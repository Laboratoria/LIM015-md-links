const path = require('path');
const fs = require('fs');


const absolutePathFile = 'C:/Users/LORD/Desktop/mdlinks-prueba/LIM015-md-links/prueba/test.md';
const relativePathFile = './prueba/test.md';
const absolutePathDirectory = 'C:/Users/LORD/Desktop/mdlinks-prueba/LIM015-md-links/prueba';
const relativePathDirectory = './prueba/';

// Function converts path in Absolute
const convertToAbsolutePath = inputPath => path.resolve(inputPath);  

//function that detects if file/directory exists, returns a boolean
const detectPathExists = inputPath => fs.existsSync(inputPath);

//function that detecs if the url is  a directory , returns a boolean
const detectDirectory = inputPath => fs.statSync(inputPath).isDirectory;

//function that opens and shows files from a directory
const openDirectory = (inputPath) => {
    let listFiles = fs.readdirSync(inputPath);
    let filesArray = [];
    listFiles.forEach((file) => {
        const pathChild = path.resolve(input,file)
        if (fs.statSync(pathChild).isFile()){
            filesArray.push(pathChild);
        } else {
            const newDirectory = openDirectory(pathChild);
            filesArray = filesArray.concat(newDirectory);
        }
    })
    return filesArray;
};

// console.log(openDirectory(absolutePathDirectory));

//function that filters an array , returns array with only .md files
const filesArray2 = [
    'C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\test.md',
    'C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\newFolder\\test2.md',
    'C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\test3.md',
];

const FilterMdFile = (inputArray) => {
    const listFilesMd = inputArray.filter(file => path.extname(file) == '.md');
    if (listFilesMd.length === 0) {
        return "there isn't any Markdown files :c "
    } else {
        return listFilesMd;
    }
};

//function that gets the urls of the files
const getURLs = (arrayRoutesMd) => {
    //regex 
    const regExp = /\[(.*)\]\(((?:\/|https?:\/\/).*)\)/gi;
    const regExpText = /\[(.*)\]/g;
    const regExpURL = /\(((?:\/|https?:\/\/).*)\)/g;
    let arrayHiperDetailsMaster = [];
    arrayRoutesMd.forEach((route) => {
        const stringInsideRoute = fs.readFileSync(route, 'utf8');
        const arrayOfHipers = stringInsideRoute.match(regExp);
        arrayHipersDetails = [];
        arrayOfHipers.forEach((e) => {
            const fileObject = {
                href : path.normalize(route),
                text : e.match(regExpText).join().slice(1,-1),
                file : e.match(regExpURL).join().slice(1, -1),
            }
            arrayHipersDetails.push(fileObject);
        })
        arrayHiperDetailsMaster = arrayHiperDetailsMaster.concat(arrayHipersDetails);
    }) 
    return arrayHiperDetailsMaster;
};

console.log(getURLs(filesArray2));



// statsObj = fs.statSync('./prueba/test.md');

// const checkTypeObject = (inputPath) => {
//     let arrayPathFiles = [];
//     if (fs.statSync(inputPath).isDirectory()) {
//       const readDirectory = fs.readdir(inputPath, (err,file) => {
//           if (err) {
//               return console.error(err);
//           }
//       })
//      readDirectory.forEach(file => {
//          const pathFile = path.join(inptPath, file);
//          arrayPathFiles = arrayPathFiles.concat(checkTypeObject(pathFile))
//      })
//      return arrayPathFiles;

//     } else {
//         return console.log('it is a file', convertToAbsolutePath(inputPath))
//     }
// };

// console.log(statsObj);


// module.exports = () => {
//   // ...
// };

// console.log("henlo :P");