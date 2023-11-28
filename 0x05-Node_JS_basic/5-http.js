const http = require('http');
const countStudents = require('./3-read_file_async');

const filePath = process.argv[2] || '';

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
});

app.on('request', (req, res) => {
  if (req.url === '/') {
    res.end('Hello holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(filePath)
      .then((data) => {
        res.end(data);
      })
      .catch((err) => res.end(err.message));
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});

module.exports = app;
