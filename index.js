const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

const absolutePathFile = 'C:/Users/LORD/Desktop/mdlinks-prueba/LIM015-md-links/prueba/test.md';
const relativePathFile = './prueba/test.md';
const absolutePathDirectory = 'C:/Users/LORD/Desktop/mdlinks-prueba/LIM015-md-links/prueba';
const relativePathDirectory = './prueba/';


const listURLsDetails = [
  {
    href: 'https://www.uxlibrary.org/explore/ui-design',
    text: 'UX library',
    file: 'C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\test.md'
  },
  {
    href: 'https://yoshiscraftedworld.nintendo.com',
    text: 'Yoshi web page',
    file: 'C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\test.md'
  },
  {
    href: 'https://youtu.be/vqCHdVOzetc',
    text: "Steamed Hams but it's Basket Case by Green Day🎵 ",
    file: 'C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\test.md'
  },
  {
    href: 'https://youtu.be/fGVtIpaqaVk',
    text: "Unsettling Things You Didn't Know About the Smurfs",
    file: 'C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\test.md'
  },
  {
    href: 'https://youtu.be/qWVc-xVZxho',
    text: '(HQ) Vitas - The 7th Element 2001🎵',
    file: 'C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\test.md'
  }
]
// console.log ( 'this is an example:' ,listURLsDetails[3].text);
// console.log ( listURLsDetails[3].href, );

// Function converts path in Absolute
const convertPathToAbsolute = inputPath => path.resolve(inputPath);  

//function that detects if file/directory exists, returns a boolean
const detectPathExists = inputPath => fs.existsSync(inputPath);

//function that detecs if the url is  a directory , returns a boolean
const detectDirectory = inputPath => fs.statSync(inputPath).isDirectory;


//function that opens and shows files from a directory

const openDirectory = (inputPath) => {
    let listFiles = fs.readdirSync(inputPath);
    let filesArray = [];
    listFiles.forEach((file) => {
        const pathChild = path.resolve(inputPath,file)
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


//function that filters an array , returns array with only .md files
const filterMdFile = (array) => array.filter(file => path.extname(file) == ".md");



// last version :
// const FilterMdFile = (inputArray) => {
//     const listFilesMd = inputArray.filter(file => path.extname(file) == '.md');
//     if (listFilesMd.length === 0) {
//         return "there isn't any Markdown files :c "
//     } else {
//         return listFilesMd;
//     }
// };



//function that gets the urls of the files    
const getURLs = (arrayRoutesMd) => {
     //regex 
    const regExp = /\[(.*)\]\(((?:\/|https?:\/\/).*)\)/gi;
    const regExpText = /\[(.*)\]/g;
    const regExpURL = /\(((?:\/|https?:\/\/).*)\)/g;
    let arrayLinksMaster = [];
    if (arrayRoutesMd.length > 0) {
        arrayRoutesMd.forEach((route) =>{
          const stringLinks = fs.readFileSync(route,'utf8');
          const arrayLinks = stringLinks.match(regExp);
          if (arrayLinks) {
            let arrayDetailed = [];
            arrayLinks.forEach( (link) => {
              const object = {
               href: link.match(regExpURL).join().slice(1,-1),
               text: link.match(regExpText).join().slice(1, -1),
               file: route,
              }
              arrayDetailed.push(object);
            });
            arrayLinksMaster = arrayLinksMaster.concat(arrayDetailed);
          }    
      })
      };
      return arrayLinksMaster;

  };


console.log(getURLs(filesArray2));



const getStatusLinks = (arrLinks) => Promise.all(arrLinks.map((arrLink) => fetch(arrLink.href) 
.then((res) => {
   arrLink.status = res.status;
   arrLink.ok = res.status !== 200 ? 'FAIL' : res.statusText;
   return arrLink;
  })
.catch(() => {
   arrLink.status = '...';
   arrLink.ok = 'FAIL';
   return arrLink;
}))).then (res => {return res;})


console.log(getStatusLinks(listURLsDetails))



module.exports = {
    detectPathExists,
    convertPathToAbsolute,
    detectDirectory,
    openDirectory,
    filterMdFile,
    getURLs,
    getStatusLinks,
}