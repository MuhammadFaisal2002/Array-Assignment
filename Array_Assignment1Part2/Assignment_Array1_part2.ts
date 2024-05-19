type student = {
    name : string,
    grades : number[]
}
let stud : student[] = [{
    name : "Faisal",
    grades : [81,65,71,98,77]
},{
    name : "Ali",
    grades : [51,55,69,88,81]
},{
    name : "Subhan",
    grades : [78,76,74,87,54]
}]
let avg : number;
let createAvgGrade = (grades : number[]) : number=>{
    let totalOfPercentage = grades[0] + grades[1] + grades[2] + grades[3] + grades[4]
    let avg = (totalOfPercentage / grades.length) 
    return avg
    } 
let displayDetails = (student : student) : void=>{
    let av = createAvgGrade(student.grades)
    console.log(`student Name is ${student.name}`);
    console.log(`student Grades is ${av}`);
}
stud.forEach(displayDetails)