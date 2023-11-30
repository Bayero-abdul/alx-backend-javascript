import readDatabase from '../utils';

const filePath = process.argv[2].toString();

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(filePath)
      .then((studentsByField) => {
        let output = 'This is the list of our students\n';

        const compare = (a, b) => a.toLowerCase().localeCompare(b.toLowerCase());
        const sortedFields = Object.keys(studentsByField).sort(compare);

        sortedFields.forEach((field) => {
          output += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
        });
        output = output.slice(0, output.length - 1);
        res.status(200).send(output);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      res.end();
    }

    readDatabase(filePath)
      .then((studentsByField) => {
        if (major && major in studentsByField) {
          let output = '';
          output += `List: ${studentsByField[major].join(', ')}`;
          res.status(200).send(output);
        }
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
