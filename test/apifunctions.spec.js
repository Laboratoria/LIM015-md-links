const {
  convertPath,
  readDir,
  PathDirectory,
  itExist,
  readFile,
  findePaths,
  findLinks,
} = require("../src/funciones");



//function 1 convertPath
//convertPath is a function
describe("convert to absolute rute", () => {
  it("is a function", () => {
    expect(typeof convertPath).toBe("function");
  });
  //convertPath convert from relative to absolute path
  it("It should return from relative path to absolute path", () => {
    expect(convertPath("rutaS/otros")).toBe("C:\\Users\\Laboratoria\\Desktop\\proyectos\\LIM015-md-links\\rutaS\\otros");
  });
  //convertPath return the same path if its absolute
  it("It should return from absolute path to the same path", () => {
    expect(convertPath("C:\\Users\\Laboratoria\\Desktop\\proyectos\\LIM015-md-links\\rutaS\\otros")).toBe("C:\\Users\\Laboratoria\\Desktop\\proyectos\\LIM015-md-links\\rutaS\\otros");
  });
});

describe("Read directory", () => {
  it("is a function", () => {
    expect(typeof readDir).toBe("function");
  });
  //read the directory the function and return an array
  it("It should return files folder that are inside the folder", () => {
    expect(readDir(__dirname + "\\prueba\\prueba2")).toEqual(["linkBreak.md","onePath.md","Prueba.js", "Prueba3"]);
  });
});

// function 3 PathDirectory
describe("this element is an directory", () => {
  it("is a function", () => {
    expect(typeof PathDirectory).toBe("function");
  }); 
  //file is into directory returns true
  it("It should return  true if files are inside the folder", () => {
    expect(PathDirectory("C:\\Users\\Laboratoria\\Desktop\\proyectos\\LIM015-md-links\\rutaS\\otros")).toBeTruthy();
  }); 
  //file isnt into directory returns false
   it("It should return false if files arent inside the folder", () => {
    expect(PathDirectory(__dirname + "/prueba/prueba2/onePath.md")).toBeFalsy();
  });
});

// function 4 itExist
//itExist is a function
describe("this link exists?", () => {
  it("is a function", () => {
    expect(typeof itExist).toBe("function");
  }); 
  //path exists? returns true
   it("It should return  true if files are inside the folder", () => {
    expect(itExist("C:\\Users\\Laboratoria\\Desktop\\proyectos\\LIM015-md-links\\rutaS\\otros")).toBeTruthy();
  }); 
  //path doesnt exist? returns false
   it("It should return false if files arent inside the folder", () => {
    expect(itExist(".\\rutaS\\otros\\README.md")).toBeFalsy();
  });
});

//function 5 readFile
//readFile is a function
describe("this link exists?", () => {
  it("is a function", () => {
   expect(typeof readFile).toBe("function");
  }); 
  //return just tag + link (1 link)
   it("It should return  true if files are inside the folder", () => {
    expect(readFile(__dirname + "/prueba/prueba2/onePath.md")).toContain("1[google](https://www.google.com.pe)");
  });
});

 //function 6 findePaths
//findePaths is a function
describe("Find files .md", () => {
  it("is a function", () => {
    expect(typeof findePaths).toBe("function");
  }); 
  //path exists? returns true
  it("It should return  true if files are inside the folder", () => {
    expect(findePaths(__dirname + "\\prueba\\prueba2")).toEqual([
      __dirname + "\\prueba\\prueba2/linkBreak.md",
      __dirname + "\\prueba\\prueba2/onePath.md",
      __dirname + "\\prueba\\prueba2/Prueba3/otro.md",
    ]);
  });
});

//function 7 findLinks
//findLinks is a function
describe("Find files.md", () => {
  it("is a function", () => {
    expect(typeof findLinks).toBe("function");
  }); 
  //one link in a file
   it("It should return  true if files are inside the folder", () => {
    expect(findLinks([__dirname + "/prueba/prueba2/onePath.md"])).toEqual(
      [
      {
        href: "https://www.google.com.pe",
        text: "google",
        file: __dirname + "/prueba/prueba2/onePath.md",
      },
    ])
  }); 
  //some links in a file
   
   
});
