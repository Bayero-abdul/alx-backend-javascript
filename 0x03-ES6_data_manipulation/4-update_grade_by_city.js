export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const newStudent = { ...student };
      for (const element of newGrades) {
        if (element.studentId === student.id) {
          newStudent.grade = element.grade;
          break;
        } else {
          newStudent.grade = 'N/A';
        }
      }
      return newStudent;
    });
}
