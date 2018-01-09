import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = store => ({
  signedInStatus: store.signedInStatus
});

export default connect(mapStateToProps)(Header);
