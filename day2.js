// Creating arrays
const fruits = ["Apple", "Mango", "Banana", "Orange"];
const numbers = [10, 20, 30, 40, 50];

// Access items
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Banana

// Array length
console.log(fruits.length); // 4

// Add item at end
fruits.push("Grapes");
console.log(fruits);

// Remove last item
fruits.pop();
console.log(fruits);

// Add item at beginning
fruits.unshift("Pineapple");
console.log(fruits);

// Remove first item
fruits.shift();
console.log(fruits);

// Find index of item
console.log(fruits.indexOf("Mango")); // 1

// Check if item exists
console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Grapes")); // false
