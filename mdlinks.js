const api = require('./index.js');

const mdLinks = (route, options = {}) => 
new Promise ((resolve, reject) => {
    if (!api.existPath(route)) {
        reject('This path does not exist');
    } else {
        const allRoutes = api.checkPath(route);
        let arrayAllRoutes = [];
        allRoutes.forEach(element => {
            const validLinks = api.getAllLinks(element);
            arrayAllRoutes = arrayAllRoutes.concat(validLinks)
        }) 
        if (!(options.validate)) {
            resolve(arrayAllRoutes);
        } else {
            const statusLinks = api.validateLinks(arrayAllRoutes);
            resolve(statusLinks);
        }
    }
});

module.exports = {
    mdLinks
  }

//console.log(mdLinks('C:\\Users\\LORD\\Desktop\\mdlinks-prueba\\LIM015-md-links\\prueba\\test.md', { validate:true }));


