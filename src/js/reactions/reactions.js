import getStore from '../get-store.js';
import rootRef from '../database.js';
import {authorize} from '../auth.js';

const store = getStore();

const reactions = {
  incrementTest: {type: 'test'}
}


export function handleTestIncrement() {
  store.dispatch(reactions.incrementTest);
}

export async function initialize() {
  log('initialized reactions');
  const user = await authorize();
  return; // TEMP: TODO: Delete
  const ref = rootRef.child('responses').orderByChild('userKey').equalTo(user.id)
  
  const handleResponseUpdate = snapshot => log(snapshot.val());
  
  ref.on('child_added', handleResponseUpdate);
  ref.on('child_changed', handleResponseUpdate);
}

