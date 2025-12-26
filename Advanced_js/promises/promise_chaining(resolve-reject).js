function checkUser(id) {
  return new Promise((resolve, reject) => {
    if(id===1){
        resolve('user found');
    }else{
        reject('user not found');
    }
  });
}


checkUser(1).then((res)=>{
    console.log(res);
   return checkUser(2); //without returning anything ....it doesn't goes to next then..
   //checkUser(1).then((res)=>console.log(res)).then(()=>checkUser(2))
   // if we use inline here then we dont have to define return here
})
.then((res)=>{
    console.log(res);

})
.catch((err)=>{
    console.log('Error:',err);
})

//--------------------------------------------------------------------------------

/*
function checkUser(id){
    return new Promise((resolve,reject)=>{
        if(id===1){
            resolve('valid user')
        }else{
            reject('invalid user')
        }
    })
}


checkUser(1)
.then((res)=>console.log(res))
.then(()=>checkUser(2) 
.catch((err)=>console.log(err)) */

// so in the above call we can use multi then without explicitly using return because...
//  if we write inline code then js implicitly adds return keyword there......and
// if we use ----.then(()=>{checkUser(2)})--- then we have to define return keyword explicitly 