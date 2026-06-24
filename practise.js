const applicants = [
  { name: "Vinayak", experience: 10 },
  { name: "Rahul", experience: 1 },
  { name: "Priya", experience: 5 },
  { name: "Amit", experience: 2 },
  { name: "Sneha", experience: 8 },
];

const highExp = applicants.filter((applicant) => applicant.experience > 3);

console.log(highExp);
