import * as auth from './auth.js';
// import rootRef from '../database.js';

// const rootRef = firebase.database().ref();

export async function onUpdate(handler) {
  const {user} = await auth.authorize();
  const dataRef = rootRef.child('???');

  dataRef.on('value', function (snapshot) {
    console.log('firebase user data update', snapshot.val());
    handler(snapshot.val());
  })
};

export async function set(data) {
  await auth.authorize();
  console.log('pretending to set data', data);
  return;
  // const dataRef = rootRef.child(rootRef.getAuth().auth.fb_id);
  // dataRef.update(data);
}

