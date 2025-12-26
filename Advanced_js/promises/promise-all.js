function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task 1 done");
    }, 1000);
  });
}
function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task 2 done");
    }, 2000);
  });
}
function task3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task 3 done");
    }, 3000);
  });
}

Promise.all([task1(),task2(),task3()])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))