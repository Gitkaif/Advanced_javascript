// --------------------------------------------------------------------------------------------------

// const user = {
//     name:'kaif',
//     greet(){
//         console.log(this.name)
//     }
// }

// user.greet()


// --------------------------------------------------------------------------------------------------

// const user = {
//     name:'kaif',
//     greet(){
//         console.log(this)   //prints everything inside user
//         console.log(this.name)
//     }
// }

// user.greet()



// --------------------------------------------------------------------------------------------------


// const user = {
//   name: "Kaif",
//   address: {
//     city: "Mumbai",
//     showCity: function () {
//       console.log(this.city);
//     }
//   }
// };

// user.address.showCity();



// --------------------------------------------------------------------------------------------------

// name='kaif'  //assigned in global to test

// const user = {
//   name: "Kaif",
//   greet: function () {
//     console.log(this.name);
//   }
// };

// const sayHi = user.greet;
// sayHi();   // so this is just a function call not user.greet() ...no reference of this



// --------------------------------------------------------------------------------------------------

// const user = {
//   name: "Kaif",
//   greet: function () {
//     function inner() {
//       console.log(this.name);
//     }
//     inner();    //it's this is global because nothing is attached so it will be undefined
//   }
// };

// user.greet();




// ----------------------------------------------ARROW ()=>----------------------------------------------------

// const user = {
//   name: "Kaif",
//   greet: () => {
//     console.log(this.name);
//   }
// };

// user.greet();


// --------------------------------------------------------------------------------------------------



// const user = {
//   name: "Kaif",
//   greet: function () {
//     const inner = () => {
//       console.log(this.name);
//     };
//     inner();
//   }
// };

// user.greet();



// --------------------------------------------------------------------------------------------------



// const user = {
//   name: "Kaif",
//   greet: function () {
//     return () => {
//       console.log(this.name);
//     };
//   }
// };

// const fn = user.greet();
// fn();


// --------------------------------------------------------------------------------------------------

// const user = {
//     name:'kaif',
//     getname(){
//         const name = 'kaiffff';
//         return this.name
//     }
// }
// console.log(user.getname())



// --------------------------------------------------------------------------------------------------


// const user = {
//   name: "Kaif",
//   greet() {
//     return function inner()  {
//       console.log(this.name);
//     };
//   }
// };

// const fn = user.greet();
// fn();



// --------------------------------------------------------------------------------------------------

// const user = {
//   name: "Kaif",

//   // Method: works only when called via the object
//   greet() {
//     console.log(this.name); // `this` depends on the caller
//   }
// };

// // Copying only the function, NOT the object context
// const fn = user.greet;

// // Plain function call → no object → default `this`
// fn(); // `this` is window, so output is undefined


// --------------------------------------------------------------------------------------------------






// --------------------------------------------------------------------------------------------------






// --------------------------------------------------------------------------------------------------





// --------------------------------------------------------------------------------------------------