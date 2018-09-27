import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB1mf3DEQR96eDCflGQ1BlwA0_vFabd7PI",
  authDomain: "expensify-fc833.firebaseapp.com",
  databaseURL: "https://expensify-fc833.firebaseio.com",
  projectId: "expensify-fc833",
  storageBucket: "expensify-fc833.appspot.com",
  messagingSenderId: "1060839448952"
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



export { firebase, googleAuthProvider, database as default};












// database.ref('expenses').on('child_removed',
//   (snapshot) => {
//     console.log('removed', snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed',
//   (snapshot) => {
//     console.log('edited', snapshot.key, snapshot.val());
// });

// firebase.database().ref().set({
//   name: 'Adham Moussa',
//   age: 28,
//   job: 'Web Developer',
//   location: {
//     country: 'Egypt',
//     city: 'Alexandria'
//   }
// }).then(() => {
//   console.log('data saved successfully');
// }).catch((e) => {
//   console.log(e);
// });

// firebase.database().ref().on('value', (snapshot) => {
//   const data = snapshot.val();
//   const msg = `${data.name} is a ${data.job}, He lives in ${data.location.city}, ${data.location.country}`;
//   console.log(msg);
// }, (e) => {
//   console.log(e);
// });