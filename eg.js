let obj = {
    name: "kaif",
    age: 21,
    address:{city:"mumbai"}
}

let shallowCopy = { ...obj }
let deepCopy = structuredClone(obj)
deepCopy.address.city = "delhi"
console.log(obj.address.city)
console.log(deepCopy.address.city)



const obj = {
  name: "Rahul",
  greet() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

obj.greet();




































var a;
console.log(a);
a = 10;






Singh Rahul
6:03 PM

console.log(b);
let b = 20;

Singh Rahul
6:06 PM


`Promise.resolve(5)
    .then(x => x * 2)
    .then(x => x + 3)
    .then(x => {
        console.log(x);
        return x * 10;
    })
    .then(console.log);
`



Singh Rahul
6:09 PM



async function foo() {
  return 10;
}

console.log(foo());





console.log("A");

async function foo() {
  console.log("B");
  await Promise.resolve();
  console.log("C");
}

foo();
console.log("D");



Singh Rahul
6:12 PM
arr = [1,2,3,7,6] targ = 10

Singh Rahul
6:16 PM



async function test() {
  try {
    Promise.reject("Error");
  } catch {
    console.log("Caught");
  }
}

test();



Singh Rahul
6:17 PM



async function test() {
  return Promise.resolve(5);
}

test().then(console.log);






Singh Rahul
6:22 PM




func(...rest,b){
console.log(b,rest);
}




Singh Rahul
6:26 PM







const obj = {
  name: "Rahul",
  greet() {
    console.log(this.name);
  }
};

const greetFn = obj.greet;
greetFn();











Singh Rahul
6:29 PM



const obj = {
  name: "Rahul",
  greet() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

obj.greet();

Singh Rahul
6:33 PM



console.log("5" - 2);

Singh Rahul
6:39 PM



var a = 10;

(function () {
  console.log(a);
  var a = 20;
})();





console.log(typeof a);
var a = 10;






Singh Rahul
6:40 PM



foo();

var foo = 10;

function foo() {
  console.log("Function");
}

foo(); 
console.log('hi'+true)