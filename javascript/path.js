const fs = require('fs');

function route(paths) {
  return paths;
};

// analiza si la función existe
function pathExist(route) {
  if (fs.existsSync(route)) {
    return true;
  } else {
    return false;
  }
};


module.exports = {
  route,
  pathExist,
};
