const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').slice(1).filter((line) => line.trim() !== '');

        let csCount = 0;
        let sweCount = 0;
        const csList = [];
        const sweList = [];

        lines.forEach((line) => {
          // eslint-disable-next-line no-unused-vars
          const [firstName, lastName, age, field] = line.split(',');
          if (field === 'CS') {
            csCount += 1;
            csList.push(firstName);
          } else if (field === 'SWE') {
            sweCount += 1;
            sweList.push(firstName);
          }
        });

        // Log the results to the console
        console.log(`Number of students: ${lines.length}`);
        console.log(`Number of students in CS: ${csCount}. List: ${csList.join(', ')}`);
        console.log(`Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`);

        resolve();
      }
    });
  });
}

module.exports = countStudents;
