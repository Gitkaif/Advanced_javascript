//async callback

function authenticateUser(callback){
    setTimeout(()=>{
        console.log('User authenticated...');
        callback('Token_123') 
    },1000);    
};
function fetchProfile(token, callback){
    setTimeout(()=>{
        console.log(`Profile fetched using ${token}`);
        callback({name:"kaif",age:21});
    },1000);
}

function showProfile(profile){
    console.log(`Profile: ${profile.name},${profile.age}`);

}

authenticateUser((token)=>{
    fetchProfile(token, (profile)=>{
        showProfile(profile);
    })
})
