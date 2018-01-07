import { combineReducers } from 'redux';
import { currentUser, signedInStatus } from './reducer';

const rootReducer = combineReducers({
  currentUser,
  signedInStatus,
});

export default rootReducer;
