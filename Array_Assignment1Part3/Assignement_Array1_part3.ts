type Employee = {
    name : string,
    salary : number,
    hoursWorked : number,
    hourlyRate : number
}
let employeeList = [{
    name : "ali",
    hoursWorked : 10,
    hourlyRate : 1000,
    salary : 0
},
{
    name : "qasim",
    hoursWorked : 21,
    hourlyRate : 700,
    salary : 0
},
{
    name : "asim",
    hoursWorked : 8,
    hourlyRate : 1600,
    salary : 0
}]
let daysOfMonth : number = 25
let salaryCalculation = (employee : Employee, daysOfMonth : number) : void =>{
    let employeeSalary : number = employee.hourlyRate * employee.hoursWorked * daysOfMonth
    if (employee.hourlyRate > 20){
        employee.salary +=  employee.salary * 1.10 
    }
    employee.salary = employeeSalary
}
for (let i=0 ; i<employeeList.length;i++){
    salaryCalculation(employeeList[i] ,daysOfMonth)
}
console.log(employeeList);

