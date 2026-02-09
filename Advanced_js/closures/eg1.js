function one() {
        setTimeout(() => {
            resolve('Order Received...')
        },1000)
}
function two() {
        setTimeout(() => {
            resolve('Order is being prepared...')
        },2000)
}
function three() {
        setTimeout(() => {
            resolve('Order Delivered...')
        },3000)

}

