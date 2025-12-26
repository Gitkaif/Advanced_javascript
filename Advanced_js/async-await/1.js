// in this 'done' will be printed first because using await pauses the function until 
// that promise returned it's result and then executes further code


async function print() {
  let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve("done");
    }, 4000);
  });

  let res = await promise;
  console.log(res);

  setTimeout(() => {
    console.log("timeout");
  }, 1000);

}
print();
