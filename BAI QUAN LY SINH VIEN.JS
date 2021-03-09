var student = {};
function input(){
    student.id = id = prompt ("Please input student ID.");
    student.name = name = prompt ("Please input student name.");
    student.scoreMath = scoreMath = Number(prompt ("Please input student math score."));
    student.scoreLiterature = scoreLiterature = Number(prompt ("Please input student literature score."));
}
input();
console.log("Id: " + student.id + " - Name: " + student.name  + " - Math: " + student.scoreMath + " - Literature: " + student.scoreLiterature);

//tinh tb diem
function average(scoreMath, scoreLiterature){
student.average = (scoreMath + scoreLiterature) / 2;
}

average( student.scoreMath, student.scoreLiterature );
console.log("Average score is: " + student.average );
var studentsArray = [];
studentsArray.push(student);
function addStudent() {
	for (let i = 0; i < studentsArray.length; i++) {
    for(let i = 0; i < studentsArray.length; i++) {
        let answer = prompt("Do you want to add student? (Y/N)");

        if(answer == "Y"|| answer == "y"){
            let newStudent = [];
    
            newStudent.id = id = prompt("Please enter student's id: ");
            newStudent.name = name = prompt("Please enter student's name: ");
            newStudent.scoreMath = scoreMath = Number(prompt("Please enter math score: "));
            newStudent.scoreLiterature = scoreLiterature = Number(prompt("Please enter literature score: "));
            
            newStudent.average  =average(newStudent.scoreMath + newStudent.scoreLiterature) / 2;
            studentsArray.push(newStudent);
        } else if(answer == "N", answer == "n") break;
    }
  }
}
addStudent();
console.log("Id: " + id + " - Name: " + name  + " - Math: " + scoreMath + " - Literature: " + scoreLiterature );
console.log("Average score is: " + average );