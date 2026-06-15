const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);
console.log(doubled);

const squared = numbers.map((num) => num * num);
console.log(squared);

const students = [
  { name: "VInayak", marks: 85 },
  { name: "Rahul", marks: 79 },
  { name: "Vishal", marks: 88 },
];

const studentNames = students.map((student) => student.name);
console.log(studentNames);
