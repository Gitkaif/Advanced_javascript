const obj = {
  name: "Kaif",
  createdAt: new Date(),
  greet: function () {
    console.log("Hi");
  }
};

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);
