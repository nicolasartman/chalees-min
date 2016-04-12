import * as auth from './auth.js';
import Firebase from 'firebase';

const rootRef = new Firebase('https://learning-prototype.firebaseio.com/prototypeOne');

export async function onUpdate(handler) {
  await auth.fetchFirebaseCredentials();
  console.log('setting up firebase update subscription');
  console.log('arggggg', rootRef.getAuth());
  const dataRef = rootRef.child(rootRef.getAuth().auth.fb_id);

  dataRef.on('value', function (snapshot) {
    console.log('user data update', snapshot.val());
    handler(snapshot.val());
  })
}

export function set(data) {
  if (rootRef.getAuth() === null) {
    throw new Error('this should never be called before login');
  }
  const dataRef = rootRef.child(rootRef.getAuth().auth.fb_id);
  dataRef.update(data);  
}

