function loadData(){
    return new Promise((resolve,reject)=>{
        console.log('loading...');
        setTimeout(()=>{
            // console.log('loading...');
            resolve('data loaded');
            
        },1000);
    });
};

loadData().then((res)=>console.log(res)
)