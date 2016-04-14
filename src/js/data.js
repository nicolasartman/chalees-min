import * as auth from './auth.js';
import Firebase from 'firebase';

const rootRef = new Firebase('https://chalees-min.firebaseio.com/prototypeOne');

export async function onUpdate(handler) {
  await auth.authorize();
  const dataRef = rootRef.child(rootRef.getAuth().auth.fb_id);

  dataRef.on('value', function (snapshot) {
    console.log('firebase user data update', snapshot.val());
    handler(snapshot.val());
  })
};

export async function set(data) {
  await auth.authorize();
  const dataRef = rootRef.child(rootRef.getAuth().auth.fb_id);
  dataRef.update(data);
}

