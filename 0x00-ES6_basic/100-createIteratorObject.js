export default function createIteratorObject(report) {
  const departmentsObj = report.allEmployees;
  const employeesList = [];
  for (const department in departmentsObj) {
    let employees = departmentsObj[department];
    employeesList.push(...employees)
  }
  return employeesList;
}
