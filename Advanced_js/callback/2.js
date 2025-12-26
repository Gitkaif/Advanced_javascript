// defining callback fn while calling
function repeat(n, cb){
    for(let i=0; i<n; i++){
        cb();
    }
}

repeat(3,()=>{
    console.log('hi');
    
});

//---------------------------------Both approch gives the same o/p-----------------------------
// defining separate fn for callback
function cb(){
console.log('hi');

}


function repeat(n, callback){
    for(let i=0; i<n; i++){
      callback();
    }
}

repeat(3,cb);