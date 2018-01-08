import { combineReducers } from 'redux';
import { currentUser, signedInStatus, discussions, comments, renderDiscussions } from './reducer';

const rootReducer = combineReducers({
  currentUser,
  signedInStatus,
  discussions,
  comments,
  renderDiscussions
});

export default rootReducer;
