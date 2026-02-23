const obj = {
    name:"kaif",
    age:21,
    address:{area:"kandivali",city:"Mumbai"}
}

let copy = structuredClone(obj);

copy.name = "tom"
copy.address.city = 'Delhi'

console.log(obj)
console.log(copy)