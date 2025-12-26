function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", id);
    }, 2000);
    resolve('success')
  });
};
getData(1).then(()=>getData(2)).then(()=>getData(3))
