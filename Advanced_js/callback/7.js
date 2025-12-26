
function getData(callback){
    setTimeout(()=>{
        callback('data received');
    },2000);
}
getData((msg)=>{
    console.log(msg);
    
});

// we can write it this way also...


function callback(){
    console.log("data received");
    
};
function getData(callback){
    setTimeout(()=>{
        callback();
    },2000)
}
getData(callback);