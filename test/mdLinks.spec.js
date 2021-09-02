const {
    mdLinks
  } = require("../index.js");
  
  const validateLinks = [
    {
      file: __dirname + "/Prueba/somePaths.md",
      href: "https://nodejs.org/e/",
      status: 404,
      statusText: "FAIL",
      text: "node",
    },
    {
      file: __dirname + "/Prueba/somePaths.md",
      href: "https://facebook.com.pe",
      status: "no found",
      statusText: "FAIL",
      text: "facebook",
    },
    {
      file: __dirname + "/Prueba/somePaths.md",
      href: "https://www.google.com.pe",
      status: 200,
      statusText: "OK",
      text: "google",
    },
    {
      file: __dirname + "/Prueba/somePaths.md",
      href: "https://www.google.com.pe",
      status: 200,
      statusText: "OK",
      text: "google",
    },
  ];

  const propertiesSomeLink = [
    {
      href: "https://nodejs.org/e/",
      text: "node",
      file: __dirname + "/Prueba/somePaths.md",
    },
    {
      href: "https://facebook.com.pe",
      text: "facebook",
      file: __dirname + "/Prueba/somePaths.md",
    },
    {
      href: "https://www.google.com.pe",
      text: "google",
      file: __dirname + "/Prueba/somePaths.md",
    },
    {
      href: "https://www.google.com.pe",
      text: "google",
      file: __dirname + "/Prueba/somePaths.md",
    },
  ];
  
  const linkErr = __dirname + "../Prueba/link.md";
  const noLinks = __dirname + "/Prueba/link.md";
  const somePath = __dirname + "/Prueba/somePaths.md";
  const linkEmpty = __dirname + "/Prueba/empty";
  
//function 3 mdlinks
test('comprueba si mdlinks retorna un promesa que se resuelve con  un array de objetos ', () => {
  return expect(mdLinks('./test', '')).toBeInstanceOf(Promise);
});

 describe("mdLinks", () => {
  it("Promise test case VALIDATE", () => {
    return expect(mdLinks(somePath, {validate:true})).resolves.toEqual(validateLinks);
    });
  it("Promise test case NO VALIDATE", () => {
    return expect(mdLinks(somePath, {validate:false})).resolves.toEqual(propertiesSomeLink);
    });
  it("Promise test case NOOPTIONS", () => {
    return expect(mdLinks(somePath, '')).resolves.toEqual(propertiesSomeLink);
    });
  it("Promise test case NOT WRITE A PATH", () => {
    return expect(mdLinks('', '')).resolves.toMatch("Enter a path please");
    });
  it("Promise test case PATH DOESNT EXIST", () => {
    return expect(mdLinks(linkErr, '')).resolves.toMatch("This path hasnt files or directories");
    });
  it("Promise test case NO FILES", () => {
    return expect(mdLinks(linkEmpty, '')).resolves.toMatch("Path doesnt exist");
    });
  it("Promise test case NO LINKS", () => {
    return expect(mdLinks(noLinks, '')).resolves.toMatch("This path hasnt links");
    });

  });