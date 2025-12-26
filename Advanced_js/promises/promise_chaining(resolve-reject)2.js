function verifyEmail(email) {
  return new Promise((resolve, reject) => {
    if (email.includes('@')) {
      resolve("Email verified");
    } else {
      reject("Invalid email");
    }
  });
}

function verifyPassword(password) {
  return new Promise((resolve, reject) => {
    if (password.length >= 6) {
      resolve("Password ok");
    } else {
      reject("Password too short");
    }
  });
}

verifyEmail("test@gmail.com")
  .then((res) => {
    console.log(res);
    return verifyPassword("123828282882");   //whatever we return from .then() becomes input for next .then()
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
