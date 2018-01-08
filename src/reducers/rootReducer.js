import { combineReducers } from 'redux';
import { currentUser, signedInStatus, discussions, comments } from './reducer';

const rootReducer = combineReducers({
  currentUser,
  signedInStatus,
  discussions,
  comments,
});

export default rootReducer;
