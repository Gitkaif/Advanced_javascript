function greetUser(name){
    console.log(`Hello ${name}`);
    
}


function fetchUser(greetUser){
    setTimeout(()=>{
        console.log('user fetched...');
        greetUser('kaif');
    },1000)
}
fetchUser(greetUser);