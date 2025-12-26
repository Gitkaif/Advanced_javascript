function step1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('step 1 done');
        },1000);
    });
};
function step2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('step 2 done');
        },1000);
    });
};
function step3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('step 3 done');
        },1000);
    });
};


step1().then((res)=>{
    console.log(res);
    return step2();
})
.then((res)=>{
    console.log(res);
    return step3();
})
.then((res)=>{
    console.log(res);
});