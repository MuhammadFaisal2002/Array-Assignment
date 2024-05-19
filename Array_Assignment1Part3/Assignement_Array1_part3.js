var employeeList = [{
        name: "ali",
        hoursWorked: 10,
        hourlyRate: 1000,
        salary: 0
    },
    {
        name: "qasim",
        hoursWorked: 21,
        hourlyRate: 700,
        salary: 0
    },
    {
        name: "asim",
        hoursWorked: 8,
        hourlyRate: 1600,
        salary: 0
    }];
var daysOfMonth = 25;
var salaryCalculation = function (employee, daysOfMonth) {
    var employeeSalary = employee.hourlyRate * employee.hoursWorked * daysOfMonth;
    if (employee.hourlyRate > 20) {
        employee.salary += employee.salary * 1.10;
    }
    employee.salary = employeeSalary;
};
for (var i = 0; i < employeeList.length; i++) {
    salaryCalculation(employeeList[i], daysOfMonth);
}
console.log(employeeList);
