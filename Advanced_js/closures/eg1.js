// function global() {
//   var b = 9;
//   function outer() {
//     var a = 1;
//     function inner() {
//       console.log(a, b);
//     }
//     inner();
//   }
//   outer()
// }
// global();

//---------------------------------------------------------------------------------------------------

// wrong output ...becoz of var scope...

//---------------------------------------------------------------------------------------------------
// function a() {
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// a();

//---------------------------------------------------------------------------------------------------

//right output becoz of closure .....inner(i) creates a closure with a new copy of i each time...

//---------------------------------------------------------------------------------------------------

// function a() {
//   for (var i = 0; i <= 5; i++) {
//     function inner(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//   }
//   inner(i);
// }
// a();

