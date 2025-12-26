// function processPayment(amount, onSuccess, onError){
//     if(amount>0){
//         setTimeout(()=>{
//             console.log('Payment successful');
//             onSuccess();
//         },1000)
//     }else{
//         onError();
//     }
// }

// function onSuccess(){
//     console.log('Payment completed...');

// }
// function onError(){
//     console.log('Invalid amount');

// }

// processPayment(0,onSuccess,onError);


// --------------------------------------------------without defining separate callback functions----------------------------------------------------


function processPayment(amount, onSuccess, onError) {
    if (amount > 0) {
        setTimeout(() => {
            console.log('Payment successful');
            onSuccess();
        }, 1000)
    } else {
        onError();
    }
}

processPayment(0,()=>console.log('Payment completed...'),() => console.log('invalid amount'));

