function cb(){
    console.log('donwload completed...');
    
}

function downloadFile(url, cb){
    setTimeout(()=>{
        console.log(`downloading from ${url} `);
       cb();
    },2000);
}
downloadFile("https://eg.com",cb);