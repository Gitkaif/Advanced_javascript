//using multiple promises and sequential awaits that executes one by one

async function fn(){
    let promise1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('step 1 done');
        },1000);
    })

    let promise2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('step 2 done');
        },1000);
    })
    let res1 = await promise1;
    console.log(res1);
    
    let res2 = await promise2;
    console.log(res2);
};
fn();