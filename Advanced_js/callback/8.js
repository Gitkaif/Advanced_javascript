function stepOne(callback){
    setTimeout(()=>{
        console.log('Step 1 done...');
        callback();
    },1000);
};

function stepTwo(){
    console.log('Step 2 done...');
    
}
stepOne(stepTwo)
