var stud = [{
        name: "Faisal",
        grades: [81, 65, 71, 98, 77]
    }, {
        name: "Ali",
        grades: [51, 55, 69, 88, 81]
    }, {
        name: "Subhan",
        grades: [78, 76, 74, 87, 54]
    }];
var avg;
var createAvgGrade = function (grades) {
    var totalOfPercentage = grades[0] + grades[1] + grades[2] + grades[3] + grades[4];
    var avg = (totalOfPercentage / grades.length);
    return avg;
};
var displayDetails = function (student) {
    var av = createAvgGrade(student.grades);
    console.log("student Name is ".concat(student.name));
    console.log("student Grades is ".concat(av));
};
stud.forEach(displayDetails);
