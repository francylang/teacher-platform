import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import Search from '../components/Search.jsx';

const mapStateToProps = store => ({
  discussions: store.discussions,
  filteredDiscussions: store.filteredDiscussions,
});

export default connect(mapStateToProps)(Search);
