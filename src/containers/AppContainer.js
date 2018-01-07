import { connect } from 'react-redux';
import App from '../components/App.jsx';
import { signOut, setCurrentUser } from '../actions/actions.js';

const mapStateToProps = store => ({
  currentUser: store.currentUser,
  signedInStatus: store.signedInStatus
});

const mapDispatchToProps = dispatch => ({
  signOut: boolean => {
    dispatch(signOut(boolean));
  },
  setCurrentUser: username => {
    dispatch(setCurrentUser(username));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
