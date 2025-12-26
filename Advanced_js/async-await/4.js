//in this there are 2 promises sooo if the first promise resolves then only it will go
// to second promise ....because if first promise rejects (by adding 2) 
// then directly it goes to catch block skipping the further promise

async function validateUser(id) {
  try {
    let userExist = new Promise((resolve, reject) => {
      if (id === 1) {
        resolve("User exits...");
      } else {
        reject("User not found");
      }
    });

    let userData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("User data loaded...");
      }, 1000);
    });

    let userFound = await userExist;
    console.log(userFound);

    let data = await userData;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
validateUser(2);
