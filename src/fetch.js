const fetch = require("node-fetch");
const {findLinks, rutaFija}= require('./funciones')
//let statusLinksFiles;
let status;

 
const validate = (arrLinks) => {
  const statusLinks = arrLinks.map((element) => 
  fetch(element.href)
    .then((res) => { 
      if((res.status >= 200) && (res.status <= 399)){
        return {
          href: element.href,
          text: (element.text.substring(0, 50)),
          path: element.file,
          status: res.status,
          statusText: 'OK'
        }
      } else if((res.status < 200 )|| (res.status >=400)){
      	return {
          href: element.href,
          text: (element.text.substring(0, 50)),
          path: element.file,
          status: res.status,
          statusText: 'fail'
        }
      }})
    .catch(() => {
      return {
        href: element.href,
        text: (element.text.substring(0, 50)),
        path: element.file,
        status: 404,
        statusText: 'fail'
      }
    })
    );
  return Promise.all(statusLinks);
};



module.exports = {
  validate
};