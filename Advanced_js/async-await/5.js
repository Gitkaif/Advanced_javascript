//awaiting  multiple  promises at once using Promise.all



async function parallelFetch() {
  try {
    let dashboard = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("User loaded...");
      }, 500);
    });

    let dashboardResult = await dashboard;
    console.log(dashboardResult);

    let laodNotifications = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Notifications loaded...");
      }, 1000);
    });

    let loadMessages = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Load messages...");
      }, 1500);
    });

    let parallelAwait = await Promise.all([laodNotifications,loadMessages])
    console.log(parallelAwait);
    

  } catch (error) {
    console.log(error);
  }
}
parallelFetch();
