import { connect } from 'react-redux';
import Login from '../components/Login';
import { signIn, setCurrentUser } from '../actions/actions.js';

const mapStateToProps = store => ({
  currentUser: store.currentUser,
});

const mapDispatchToProps = dispatch => ({
  signIn: boolean => {
    dispatch(signIn(boolean));
  },
  setCurrentUser: username => {
    dispatch(setCurrentUser(username));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
