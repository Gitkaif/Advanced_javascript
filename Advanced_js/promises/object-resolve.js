function getData(id) {
    return new Promise((resolve, reject) => {
        resolve({ id: 1, name: "kaif" })
        
    })
}

getData().then((msg) => {
    return msg.name.toUpperCase()
})
    .then((result) => {
    console.log(result)
})
    .catch((err) => {
    console.log(err)
})
