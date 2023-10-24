const {mdLinks} = require('./index.js');

mdLinks('./samples/example1.md', true)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));