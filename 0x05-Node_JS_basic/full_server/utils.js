import { promises as fsPromises } from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fsPromises.readFile(filePath, 'utf8')
      .then((data) => {
        const lines = data.split('\n').slice(1).filter((line) => line.trim() !== '');
        const students = {};

        lines.forEach((line) => {
          const row = line.split(',');
          const firstName = row[0];
          const field = row[3];

          if (firstName && field) {
            if (students[field]) {
              students[field].push(firstName.trim());
            } else {
              students[field] = [firstName.trim()];
            }
          }
        });

        resolve(students);
      })
      .catch((err) => reject(new Error(err.message)));
  });
}

export default readDatabase;
