/******************************************************
 * 1️⃣ BASIC OBJECT & PROTOTYPE
 ******************************************************/

// Every object in JavaScript has an internal [[Prototype]]
// You can access it using __proto__ (not recommended in production)

const obj = {};

console.log(obj.__proto__); 
// Output: Object.prototype

console.log(obj.__proto__ === Object.prototype); 
// true

// Object.prototype is the top-level prototype for normal objects
console.log(Object.prototype.__proto__); 
// null (end of prototype chain)



/******************************************************
 * 2️⃣ PROTOTYPE CHAIN LOOKUP
 ******************************************************/

const user = {
  name: "Kaif"
};

// 'toString' is NOT inside user
// JS will look in Object.prototype
console.log(user.toString()); 
// Found in Object.prototype



/******************************************************
 * 3️⃣ CONSTRUCTOR FUNCTION
 ******************************************************/

function User(name) {
  this.name = name; // own property
}

const u1 = new User("Kaif");

// When using 'new', JS does internally:
// 1. Creates empty object {}
// 2. Links object.__proto__ to User.prototype
// 3. Sets this to that object
// 4. Returns the object

console.log(u1);
console.log(u1.__proto__ === User.prototype); 
// true



/******************************************************
 * 4️⃣ ADDING METHODS USING PROTOTYPE
 ******************************************************/

User.prototype.greet = function () {
  console.log("Hello " + this.name);
};

u1.greet(); 
// JS looks for greet:
// Step 1: inside u1 ❌
// Step 2: inside User.prototype ✅
// Executes with this = u1



/******************************************************
 * 5️⃣ OWN PROPERTY vs INHERITED PROPERTY
 ******************************************************/

console.log(u1.hasOwnProperty("name"));  
// true (directly inside object)

console.log(u1.hasOwnProperty("greet")); 
// false (comes from prototype)



/******************************************************
 * 6️⃣ FULL PROTOTYPE CHAIN STRUCTURE
 ******************************************************/

console.log(u1.__proto__);                  // User.prototype
console.log(u1.__proto__.__proto__);        // Object.prototype
console.log(u1.__proto__.__proto__.__proto__); 
// null



/******************************************************
 * 7️⃣ ARRAY PROTOTYPE CHAIN
 ******************************************************/

const arr = [1, 2, 3];

// push() is not inside arr
// It exists in Array.prototype

console.log(arr.__proto__ === Array.prototype); 
// true

console.log(Array.prototype.__proto__ === Object.prototype);
// true



/******************************************************
 * 8️⃣ Object.create() (Manual Prototype Linking)
 ******************************************************/

const animal = {
  speak() {
    console.log("Animal speaks");
  }
};

// Create object with animal as its prototype
const dog = Object.create(animal);

dog.bark = function () {
  console.log("Dog barks");
};

dog.bark();   // own method
dog.speak();  // inherited method

console.log(dog.__proto__ === animal); 
// true



/******************************************************
 * 9️⃣ IMPORTANT: prototype vs __proto__
 ******************************************************/

function A() {}

const a = new A();

// prototype → belongs to function
console.log(A.prototype);

// __proto__ → belongs to object
console.log(a.__proto__);

// Connection:
console.log(a.__proto__ === A.prototype); 
// true



/******************************************************
 * 🔟 PROPERTY LOOKUP SIMULATION (MENTAL MODEL)
 ******************************************************/

// When you do:
u1.greet();

/*
JS internally does something like:

let obj = u1;

while (obj != null) {
   if (obj has greet) return greet;
   obj = obj.__proto__;
}

return undefined;
*/

