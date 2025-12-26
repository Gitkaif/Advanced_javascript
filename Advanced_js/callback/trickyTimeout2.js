console.log(1);

new Promise((resolve)=>{
    setTimeout(()=>{
    console.log(2);
    resolve();
})
}).then(()=>{
    console.log(3);
})





//async await version
console.log('1')
async function e(){
    await new Promise((res)=>{
        setTimeout(()=>{
        console.log('2')
        res()
        },0)
    })
console.log('3')
}
e()