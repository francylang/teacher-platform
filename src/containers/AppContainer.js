import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import App from '../components/App.jsx';
import { signOut, setCurrentUser, fetchDiscussions, fetchComments, renderedFiltered, updateDiscussions } from '../actions/actions.js';

const mapStateToProps = store => ({
  currentUser: store.currentUser,
  signedInStatus: store.signedInStatus,
  comments: store.comments,
  discussions: store.discussions,
});

const mapDispatchToProps = dispatch => ({
  signOut: boolean => {
    dispatch(signOut(boolean));
  },
  setCurrentUser: username => {
    dispatch(setCurrentUser(username));
  },
  retrieveComments: () => {
    dispatch(fetchComments());
  },
  retrieveDiscussions: () => {
    dispatch(fetchDiscussions());
  },
  updateDiscussions: updatedDiscussions => {
    dispatch(updateDiscussions(updatedDiscussions));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
