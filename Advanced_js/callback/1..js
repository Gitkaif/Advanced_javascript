function a(){
    return 2;   
}

function b(callback){
    console.log(callback());
    
    return 3;
}
console.log(b(a));