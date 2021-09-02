// const input2 = [
//   {
//     href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export',
//     text: 'Import Export',
//     file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\prueba1.md',
//     status: 200,
//     message: 'OK'
//   },
//   {
//     href: 'https://regexr.com/',
//     text: 'Regex',
//     file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\prueba1.md',
//     status: 200,
//     message: 'OK'
//   },
//   {
//     href: 'https://regexr.com/',
//     text: 'Regex',
//     file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\prueba1.md',
//     status: 200,
//     message: 'OK'
//   },
//   {
//     href: 'https://www.figma.com/blog/1',
//     text: 'figma',
//     file: 'C:\\Users\\bethz\\Documents\\Laboratoria\\md-links\\LIM015-md-links\\src\\prueba\\prueba1.md',
//     status: 404,
//     message: 'fail'
//   }
// ];
  
// const arrayLinks = (objLinks) => objLinks.map((item) => item.href);
  
const totalAndUnique = (objLinks) => {
  const totalLinks = objLinks.map((item) => item.href).length;
  //   const linksUnique = objLinks.map((item) => item.href).reduce( (acum, item) => {
  //     if (acum.indexOf(item) < 0) {
  //       acum.push(item);
  //     }
  //     return acum;
  //   }, []);  
  const linksUnique = [...new Set(objLinks.map((item) => item.href))];
  return `Total: ${totalLinks}\nUnique: ${linksUnique.length}`;
};
  
// console.log(totalAndUnique(input2));
  
const totalLinksBroken = (objLinks) => {
  // const arrayLinksMnsj = objLinks.map((item) => item.message);    
  const broken = objLinks.map((item) => item.message).filter(elem => elem === 'fail').length;
  return `Broken: ${broken}`;
};
  
// console.log(totalLinksBroken(input2));

module.exports = {
  totalAndUnique,
  totalLinksBroken
};
