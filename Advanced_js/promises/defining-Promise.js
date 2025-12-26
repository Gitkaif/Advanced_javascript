let p = new Promise((resolve, reject)=>{
    resolve('success');
})
p.then((msg)=>{
    console.log(msg);
    
})