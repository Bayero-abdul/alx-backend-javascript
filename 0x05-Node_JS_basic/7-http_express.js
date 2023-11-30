const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

const filePath = process.argv[2] || '';

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(filePath)
    .then((data) => res.end(data))
    .catch((err) => res.end(err.message));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
