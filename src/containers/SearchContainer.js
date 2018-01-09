import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import Search from '../components/Search.jsx';
import { updateDiscussions } from '../actions/actions.js';

const mapStateToProps = store => ({
  discussions: store.discussions,
  filteredDiscussions: store.filteredDiscussions,
});

const mapDispatchToProps = dispatch => ({
  updateDiscussions: updatedDiscussions => {
    dispatch(updateDiscussions(updatedDiscussions));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
