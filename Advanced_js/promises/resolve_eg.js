function getPromise(msg){
    return new Promise((resolve, reject)=>{
        resolve('done');
    })
}
getPromise().then((msg)=>console.log(msg))
