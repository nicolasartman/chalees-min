import Immutable from 'immutable';
import {createStore, combineReducers, compose} from 'redux';

const actionHandlers = {
  'test': (state) => state.set('test', (state.get('test') + 1) || 0)
};

const identityReducer = (state = Immutable.Map({}), action) => {
  console.log('reducer was called', state, state.get('test'), action);
  
  const actionHandler = actionHandlers[action.type];
  
  return actionHandler ? actionHandler(state, action) : state;
};

let store = null;

export default function () {
  // let maybeDevTools = () => {}
  
  if (__DEV__) {
    // TODO: add in redux devtools
    // maybeDevTools = DevTools.instrument();
    // require('redux-devtools').persistState(
    //   window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    // );
  }
  
  if (!store) {
    store = createStore(combineReducers({
      identityReducer
    }));
    
    window.store = store;
  }
  
  return store;
}
