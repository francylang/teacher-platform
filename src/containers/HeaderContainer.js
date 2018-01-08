import { connect } from 'react-redux';
import Header from '../components/Header';
import { signIn, setCurrentUser } from '../actions/actions.js';

const mapStateToProps = store => ({
  signedInStatus: store.signedInStatus
});

export default connect(mapStateToProps)(Header);