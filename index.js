const { mdLink } = require('./main.js');
// const { getStatus } = require('./src/api.js');

const route = process.argv[2];

mdLink(route, { validate: false })
  .then((response) => {
    getStatus(response);
    // console.log(response);
  }).catch((error) => { console.log(error.message); });

// mdLink(route, { validate: false })
// .then((response) => {
//   console.log(response);
// }).catch((error) => { console.log(error); });
