function callback(){
    console.log('hello');
}

function doTwice(callback){
    for(let i=1; i<3; i++){
        callback();
    };
};
doTwice(callback);