function generateStudentId(studentClass){

let students =
JSON.parse(
localStorage.getItem("students")
) || [];

let today = new Date();

let year =
today.getFullYear();

let month =
String(today.getMonth()+1)
.padStart(2,"0");

let count =
students.filter(
s =>
s.studentClass === studentClass
).length + 1;

let roll =
String(count)
.padStart(2,"0");

return `${year}${month}${studentClass}${roll}`;
}

document
.getElementById("studentForm")
?.addEventListener("submit", function(e){

e.preventDefault();

let studentClass =
document.getElementById("studentClass").value;

let studentId =
generateStudentId(studentClass);

let student = {

studentId,

studentName:
document.getElementById("studentName").value,

guardianMobile:
document.getElementById("guardianMobile").value,

studentClass,

group:
document.getElementById("group").value,

shift:
document.getElementById("shift").value,

monthlyFee:
document.getElementById("monthlyFee").value

};

let students =
JSON.parse(
localStorage.getItem("students")
) || [];

students.push(student);

localStorage.setItem(
"students",
JSON.stringify(students)
);

alert(
"Student Saved\nID: " + studentId
);

location.reload();

});
