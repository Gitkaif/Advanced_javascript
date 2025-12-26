function fastTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fast");
    }, 1000);
  });
}
function mediumTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("medium");
    }, 2000);
  });
}
function slowTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("slow");
    }, 3000);
  });
}

Promise.race([fastTask(),mediumTask(),slowTask()])
.then((res)=>console.log(res)
).catch((err)=>console.log(err)
)