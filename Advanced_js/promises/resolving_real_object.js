function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:"kaif",age:21});
        },2000);
    });
};
getUser().then((user)=>console.log(user)
)