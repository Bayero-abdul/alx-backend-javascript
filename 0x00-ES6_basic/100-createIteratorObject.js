export default function createIteratorObject(report) {
  const departmentsObj = report.allEmployees;
  const employeesList = [];
  for (const department in departmentsObj) {
    if (Object.prototype.hasOwnProperty.call(departmentsObj, department)) {
      const employees = departmentsObj[department];
      employeesList.push(...employees);
    }
  }
  return employeesList;
}
