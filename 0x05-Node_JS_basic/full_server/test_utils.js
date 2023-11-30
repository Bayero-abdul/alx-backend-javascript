import readDatabase from './utils.js';

const filePath = process.argv[2] || '';

readDatabase(filePath)
  .then((data) => console.log(data))
  .catch((err) => console.error(err.message));
