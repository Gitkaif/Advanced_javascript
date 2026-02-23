/******************************************************
 * 1️⃣ Base Object (animal)
 ******************************************************/

// 'animal' is created using object literal
// All object literals automatically inherit from Object.prototype

const animal = {
    speak() {
        console.log('Animal speaks');
    }
};

// Check what animal inherits from
console.log(animal.__proto__ === Object.prototype); 
// true



/******************************************************
 * 2️⃣ Create dog using Object.create()
 ******************************************************/

// This creates a new empty object
// and sets its __proto__ to 'animal'

const dog = Object.create(animal);

// Internally this is like:
// dog.__proto__ = animal;

console.log(dog.__proto__ === animal); 
// true



/******************************************************
 * 3️⃣ Add Own Method to dog
 ******************************************************/

dog.bark = function () {
    console.log('Dog barks');
};

dog.bark();   // own method
dog.speak();  // inherited from animal



/******************************************************
 * 4️⃣ Understanding Your Confusion
 ******************************************************/

// You wrote:
console.log(dog.__proto__ === animal.__proto__); 
// false

/*
Why false?

dog.__proto__        → animal
animal.__proto__     → Object.prototype

So you're comparing:

animal === Object.prototype  → false
*/



/******************************************************
 * 5️⃣ Visualizing the Prototype Chain
 ******************************************************/

/*
Prototype chain looks like this:

dog
  ↓
animal
  ↓
Object.prototype
  ↓
null
*/

console.log(dog.__proto__);                    // animal

console.log(dog.__proto__.__proto__);          // Object.prototype
//dog.__proto__ == animal so it becomes (animal.__proto__)   
// ...so animal is an object literal(normal objs) so it automatically inherit from Object.prototype 
// that's y it prints Object.prototype


console.log(dog.__proto__.__proto__.__proto__); // null



/******************************************************
 * 6️⃣ Example Using Object.prototype Directly
 ******************************************************/

// Every normal object inherits from Object.prototype

const obj = {};

console.log(obj.__proto__ === Object.prototype); 
// true

// Methods like toString() and hasOwnProperty()
// come from Object.prototype

console.log(obj.toString()); 
// inherited from Object.prototype

console.log(obj.hasOwnProperty("test")); 
// inherited from Object.prototype



/******************************************************
 * 7️⃣ Demonstrating Property Lookup
 ******************************************************/

/*
When we call:

dog.speak()

JS does:

1. Check inside dog → not found
2. Go to dog.__proto__ (animal) → found
3. Execute it

If not found in animal:
4. Go to Object.prototype
5. If still not found → null → stop
*/

console.log(dog.hasOwnProperty("bark"));   // true (own property)
console.log(dog.hasOwnProperty("speak"));  // false (inherited)