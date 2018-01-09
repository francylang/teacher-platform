import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import Search from '../components/Search.jsx';
// import { renderedFiltered } from '../actions/actions.js';

const mapStateToProps = store => ({
  discussions: store.discussions,
  filteredDiscussions: store.filteredDiscussions,
});

const mapDispatchToProps = dispatch => ({
  // renderedFiltered: (discussions, searchTerm) => {
  //   dispatch(renderedFiltered(discussions, searchTerm));
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
