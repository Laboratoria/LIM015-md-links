const { mdLink } = require('./main.js');
// const { linkStatus } = require('./src/api.js')

const route = process.argv[2];

mdLink(route, { validate: false })
  .then((response) => {
    console.log(response);
  }).catch((error) => { console.log(error); });
