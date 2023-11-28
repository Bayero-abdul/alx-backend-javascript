const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').slice(1).filter((line) => line.trim() !== '');
        const students = {};

        lines.forEach((line) => {
          const row = line.split(',');
          const firstName = row[0];
          const field = row[3];

          if (firstName && field) {
            if (students[field]) {
              students[field].count += 1;
              students[field].list.push(firstName.trim());
            } else {
              students[field] = {
                count: 1,
                list: [firstName.trim()],
              };
            }
          }
        });

        let output = '';

        const totalStudents = Object.values(students).reduce((sum, field) => sum + field.count, 0);
        output += `Number of students: ${totalStudents}\n`;

        Object.keys(students).forEach((field) => {
          output += `Number of students in ${field}: ${students[field].count}. List: ${students[field].list.join(', ')}\n`;
        });

        console.log(output);
        resolve(output);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
