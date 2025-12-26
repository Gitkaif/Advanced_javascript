//in this i have raced all the promises against the timeout so whichever finishes first 


async function fetchDashboard(userId) {
  try {
    let userValidate = new Promise((resolve, reject) => {
      if (userId === 1) {
        resolve("User ok");
      } else {
        reject("USer not authorized");
      }
    });
    
    let validateAwait = await userValidate;
    console.log(validateAwait);

    let loadStats = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Stats loaded");
      }, 1500);
    });

    let loadFeed = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Feed loaded");
      }, 2000);
    });

    let loadAds = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Ads loaded");
      }, 3000);
    });

    let timeout = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Dashboard timeout");
      }, 4000);
    });

    let raceCall = await Promise.race([Promise.all([loadStats, loadFeed, loadAds]),timeout]);

    const[stats, feed, ads] = raceCall;
    console.log(stats);
    console.log(feed);
    console.log(ads);
    
  } catch (error) {
    console.log(error);
    
  }

}
fetchDashboard(1);
