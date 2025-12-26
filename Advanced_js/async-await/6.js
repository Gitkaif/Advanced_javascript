// awaiting parallel promises + sequential 


async function loadProfile(id) {
  try {
    let validateUser = new Promise((resolve, reject) => {
      if (id > 0) {
        resolve("User Validated");
      } else {
        reject("Invalid User Id");
      }
    });

    let validate = await validateUser;
    console.log(validate);

    let loadProfileData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Profile data loaded");
      }, 1000);
    });

    let loaddata = await loadProfileData;
    console.log(loaddata);

    let loadNotifications = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Notification loaded");
      }, 1500);
    });

    let loadFriends = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Friends loaded");
      },2000);
        
    });

    let parallel = await Promise.all([loadNotifications, loadFriends]);
    console.log(parallel[0]);
    console.log(parallel[1]);
  } catch (error) {
    console.log(error);
  }
}

loadProfile(1);