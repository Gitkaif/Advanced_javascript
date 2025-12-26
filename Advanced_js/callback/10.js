function loginUser(callback1){
    setTimeout(()=>{
        console.log('User logged in...');
        callback1('kaif');
    },1000);
}
function getOrders(username, callback2){
    setTimeout(()=>{
        console.log(`Orders fetched for ${username}`);
        callback2(['order1', 'order2', 'order3']);
    },1000)
}
function showOrders(orders){
    console.log(`Orders: ${orders}`);
}
loginUser((username) => {
    getOrders(username, (orders) => {
        showOrders(orders);
    });
})
