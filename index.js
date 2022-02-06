const employee = {
    name: "David",
    streetAddress: "123 Blvd",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee, [key] : value,}
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
function deleteFromEmployeeByKey(employee, key) {
    delete {...employee[key]};
    return {employee};
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;

}