let person = {
  name: "Vinayak",
  age: 34,
  city: "Belgaum",
  skills: ["HTMl", "CSS", "JavaScript", "React"],
};

console.log(`My name is ${person.name} and my city is ${person.city}`);
console.log(`My age is ${person.age}`);

person.skills.forEach((skill, index) => {
  console.log(`My Skill ${index + 1} ${skill}`);
});
