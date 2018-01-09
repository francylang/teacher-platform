import { connect } from 'react-redux';
import CardContainer from '../components/CardContainer.jsx';
import { filterDiscussions } from '../actions/actions.js';

const mapStateToProps = store => ({
  discussions: store.discussions,
  filteredDiscussions: store.discussions,
});

const mapDispatchToProps = dispatch => ({
  filterDiscussions: (filteredDiscussions, searchTerm) => {
    dispatch(filterDiscussions(filteredDiscussions, searchTerm));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
