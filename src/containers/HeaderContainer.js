import { connect } from 'react-redux';
import Header from '../components/Header';
import { signOut, setCurrentUser } from '../actions/actions.js';

const mapStateToProps = store => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
