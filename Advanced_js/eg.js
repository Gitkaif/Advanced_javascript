// function task1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("task 1 done...");
//     },1000)
//   });
// }
// function task2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("task 2 done...");
//     },1000)
//   });
// }
// function task3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("task 3 done...");
//     },1000)
//   });
// }
// task1()
//   .then((res) => {
//     console.log(res);
//     return task2();
//   })
//   .then((res) => {
//     console.log(res);
//     return task3();
//   })
//   .then((res) => {
//     console.log(res);
//   });

async function tasks() {
  try {
    let promise1 = new Promise((resolve, reject) => {
      resolve("task 1 done");
    });

    let promise2 = new Promise((resolve, reject) => {
      resolve("task 2 done");
    });

    let promise3 = new Promise((resolve, reject) => {
      resolve("task 3 done");
    });

    let parallel = await Promise.all([promise1, promise2, promise3]);
    const[one,two,three] = parallel
    console.log(one);
    console.log(two);
    console.log(three);
  } catch (error) {
    console.log(error);
  }
}
tasks();
