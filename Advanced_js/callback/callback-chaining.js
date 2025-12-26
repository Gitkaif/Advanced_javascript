function getData(data_id, callback) {
  setTimeout(() => {
    console.log("data id:", data_id);
    if (callback) {
      callback();
    }
  }, 2000);
}
getData(1, () => {
  getData(2, () => {
    getData(3);
  });
});
