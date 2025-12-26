// Step 1: Verifies the user after 1 second, then sends back the username
function verifyUser(callback){
    setTimeout(()=>{
        console.log('User verified...');
        callback('kaif');     // pass username to next step
    },1000);
}

// Step 2: Fetches account details for the given username after 1 second
function fetchAccount(username, callback){
    setTimeout(()=>{
        console.log(`Account fetched for ${username}`);
        callback({balance: 5000});   // pass account object to next step
    },1000)
}

// Step 3: Shows the balance from the account object
function showBalance(balance){
    console.log(`Balance: ${balance.balance}`);
}

// Calling the flow:
// verifyUser → fetchAccount → showBalance
verifyUser((username)=>{                  // gets "kaif" from verifyUser
    fetchAccount(username,(acc)=>{        // gets account object from fetchAccount
        showBalance(acc);                 // prints the balance
    });
});
