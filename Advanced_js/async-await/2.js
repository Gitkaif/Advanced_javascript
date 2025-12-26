//using try catch with async/await 

async function rejct(){
    try {
        let promise = new Promise((resolve,reject)=>{
        reject('something went wrong...');
    });
    let res = await promise;
    } catch (error) {
        console.log(error);
    }
    
}
rejct();