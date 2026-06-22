/*function info(name, city, job) {
  console.log(`Hi I am ${name} from ${city} and I want to become ${job}`);
}

info("VInayak", "Belgaum", "Web Developer");
info("Rahul", "Mumbai", "Technician");
info("Kusum", "Belgaum", "Tailor");

function makeChai() {
  console.log("Chai is raedy");
  return "Here is your chai";
}

const myChai = makeChai();
console.log(myChai);

function calculateSalary(basic, bonus) {
  return basic + bonus;
}
const totalSalary = calculateSalary(25000, 5000);
console.log(`My Total Salry is: ${totalSalary}`);

function checkExperience(years) {
  if (years >= 2) {
    return "You are Selected";
  } else {
    return " You are not Selected";
  }
}

const Rahul = checkExperience(3);
console.log(Rahul);

const Priya = checkExperience(1);
console.log(Priya);*/

function electricityBill(units) {
  if (units <= 100) {
    return units * 2;
  } else {
    return 100 * 2 + (units - 100) * 5;
  }
}

const bill = electricityBill(80);
console.log(`Total bill is: ${bill}`);
