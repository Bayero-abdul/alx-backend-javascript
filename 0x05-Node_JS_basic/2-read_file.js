const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
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

    console.log(`Number of students: ${lines.length}`);
    console.log(`Number of students in CS: ${csCount}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
