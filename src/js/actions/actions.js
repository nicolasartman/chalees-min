// temporary, for testing
import * as reactions from '../reactions/reactions.js';
import {authorize} from '../auth.js';
import rootRef from '../database.js';

export function incrementTest() {
  reactions.handleTestIncrement()
};

export async function saveResponse(text) {
  const user = await authorize();
  const payload = {
    userKey: user.uid,
    itemKey: 'testorama',
    setKey: 'chapter-2',
    kind: 'textResponse',
    content: text
  };
  log('payload', payload);
  return rootRef.child(`responses/${user.uid}|testorama`).set(payload);
}