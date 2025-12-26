
//  console.log(typeof null); //--- object (bug in js)
//  console.log(typeof NaN); //--- number
//  console.log( typeof []); //--- object
//  console.log(typeof (()=>{})); //--- function
//  console.log(typeof(function a(){})); //-- function

//  console.log([]==[]) //-false
//  //false because...array is non primitive and js checks memory references
//  //  of non-primitive not the value...and every array has diff reference 


// console.log(NaN === NaN);  //in js NaN is not equal to anything not even itself

name='kaif'
const obj = {
 // name: "Kaif",
  say: ()=> {
    console.log(this.name);
  }
};

obj.say();
