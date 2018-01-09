import { connect } from 'react-redux';
import Search from '../components/Search.jsx';
import { updateDiscussions } from '../actions/actions.js';

const mapStateToProps = store => ({
  discussions: store.discussions,
});

const mapDispatchToProps = dispatch => ({
  updateDiscussions: updatedDiscussions => {
    dispatch(updateDiscussions(updatedDiscussions));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
