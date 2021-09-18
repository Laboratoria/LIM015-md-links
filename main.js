const { mdLink } = require('./src/index.js');
// const { getStatus } = require('./src/api.js');

const route = process.argv[2];

mdLink(route, { validate: true })
  .then((response) => {
    console.log(response);
  }).catch((error) => { console.log(error.message); });

// EJECUTE NODE
/*
node main.js 'C:\Users\Estudiante\Documents\GitHub\LIM015-md-links\testing_functions\testing_md.md'
*/
