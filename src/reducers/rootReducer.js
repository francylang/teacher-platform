import { combineReducers } from 'redux';
import { currentUser, signedInStatus, discussions, comments, renderDiscussions, filteredDiscussions } from './reducer';

const rootReducer = combineReducers({
  currentUser,
  signedInStatus,
  discussions,
  comments,
  renderDiscussions,
  filteredDiscussions,
});

export default rootReducer;
