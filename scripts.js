const userLeft = false;
const userWatchingCat = true;

function watchTurorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':(',
      });
    } else if (userWatchingCat) {
      resolve({
        name: 'User watching cat meme',
        message: 'Manio Bomba Design',
      });
    } else {
      resolve('Thumbs up and Subscribe');
    }
  });
}

watchTurorialPromise().then((message) => {
  console.log('Succes ' + message).catch((error) => {
    console.log(error.name + ' ' + error.message);
  });
});
