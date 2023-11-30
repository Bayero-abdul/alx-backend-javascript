import express from 'express';
import StudentsController from './controllers/StudentsController.js';

const app = express();
const port = 1245;

app.get('/students', (req, res) => {
  StudentsController.getAllStudents(req, res);
});

app.get('/students/:major', (req, res) => {
  StudentsController.getAllStudentsByMajor(req, res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
