/******************************************************
 * Object.assign() – Shallow Copy & Merge
 ******************************************************/

// Source objects
const obj1 = { name: "jerry" };
const obj2 = { age: 21 };

// If obj2 also had { name: "tom" },
// then the final result would keep only one "name"
// and the last value would overwrite the earlier one.
// No duplicate keys exist in objects.


// Object.assign(target, source)
// It copies properties from source into target
// ⚠ It modifies the FIRST argument (target)

const result = Object.assign(obj1, obj2);


/******************************************************
 * Understanding What Happened
 ******************************************************/

// result and obj1 point to the SAME object
console.log(result === obj1); 
// true

// Because Object.assign modifies obj1 directly
console.log(obj1);  
// { name: "jerry", age: 21 }

console.log(obj2);  
// { age: 21 }  (unchanged)


/******************************************************
 * Example: Overwriting Properties
 ******************************************************/

const a = { name: "jerry" };
const b = { name: "tom", age: 5 };

// Since both have "name",
// the later object's value overwrites earlier one.

const merged = Object.assign(a, b);

console.log(merged);
// { name: "tom", age: 5 }

// Explanation:
// Properties copied from left to right.
// If duplicate key exists → last value wins.


/******************************************************
 * Important: Shallow Copy Behavior
 ******************************************************/

const user1 = {
  name: "kaif",
  address: {
    city: "Mumbai"
  }
};

const copy = Object.assign({}, user1);

// Modify nested object
copy.address.city = "Delhi";

// Because Object.assign does SHALLOW copy,
// nested objects are copied by reference

console.log(user1.address.city); 
// "Delhi"  ❗ (original changed)

// Top level is cloned
// Nested objects still share same memory reference


/******************************************************
 * Correct Way to Avoid Modifying Original
 ******************************************************/

const original = { x: 1 };
const clone = Object.assign({}, original);

console.log(clone === original); 
// false (new object created)