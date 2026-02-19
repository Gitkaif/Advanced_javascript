//------------------------------------------------------------------------------------------------------------------------------------------------

// function greet(){
//     console.log(this.name)
// }

// const user = {name:"kaif"}

// const boundgreet = greet.bind(user)   //bind permanently fixes the value of this 
// boundgreet()


//------------------------------------------------------------------------------------------------------------------------------------------------

// const user = {
//   name: "Kaif",
//   greet() {
//     console.log(this.name);
//   }
// };

// const fn = user.greet;
// const boundgreet = fn.bind(user)
// boundgreet()




//------------------------------------------------------------------------------------------------------------------------------------------------

// function greet() {
//   console.log(this.name);
// }

// const user1 = { name: "Kaif" };
// const user2 = { name: "Alex" };

// const boundGreet = greet.bind(user1);

// boundGreet();           // Kaif
// boundGreet.call(user2);  //still kaif because call or apply cannot override a bound this 



//------------------------------------------------------------------------------------------------------------------------------------------------




//------------------------------------------------------------------------------------------------------------------------------------------------