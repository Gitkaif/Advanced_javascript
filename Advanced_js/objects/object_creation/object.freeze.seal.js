/******************************************************
 * 1️⃣ Object.freeze()
 ******************************************************/

const userFreeze = {
  name: "Kaif",
  age: 21
};

// Freeze the object
Object.freeze(userFreeze);

// ❌ Cannot modify existing property
userFreeze.age = 25;

// ❌ Cannot add new property
userFreeze.city = "Mumbai";

// ❌ Cannot delete property
delete userFreeze.name;

console.log(userFreeze);
// Output: { name: "Kaif", age: 21 }
// Nothing changed


// Check if object is frozen
console.log(Object.isFrozen(userFreeze)); 
// true



/******************************************************
 * 2️⃣ Important: Freeze is SHALLOW
 ******************************************************/

const nestedFreeze = {
  name: "Kaif",
  address: {
    city: "Mumbai"
  }
};

Object.freeze(nestedFreeze);

// Top-level modification ❌
nestedFreeze.name = "Ali";

// Nested object modification ✅ (allowed)
nestedFreeze.address.city = "Delhi";

console.log(nestedFreeze.address.city);
// "Delhi" ❗ (because freeze is shallow)



/******************************************************
 * 3️⃣ Object.seal()
 ******************************************************/

const userSeal = {
  name: "Kaif",
  age: 21
};

// Seal the object
Object.seal(userSeal);

// ✅ Can modify existing property
userSeal.age = 25;

// ❌ Cannot add new property
userSeal.city = "Mumbai";

// ❌ Cannot delete property
delete userSeal.name;

console.log(userSeal);
// Output: { name: "Kaif", age: 25 }


// Check if object is sealed
console.log(Object.isSealed(userSeal));
// true



/******************************************************
 * 4️⃣ Important: Seal is also SHALLOW
 ******************************************************/

const nestedSeal = {
  name: "Kaif",
  address: {
    city: "Mumbai"
  }
};

Object.seal(nestedSeal);

// Nested object is NOT sealed
nestedSeal.address.city = "Delhi";  // ✅ allowed

console.log(nestedSeal.address.city);
// "Delhi"



/******************************************************
 * 5️⃣ Quick Comparison Summary
 ******************************************************/

/*
Object.freeze():
- ❌ Cannot add properties
- ❌ Cannot delete properties
- ❌ Cannot modify existing properties
- Shallow

Object.seal():
- ❌ Cannot add properties
- ❌ Cannot delete properties
- ✅ Can modify existing properties
- Shallow
*/