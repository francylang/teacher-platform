import { connect } from 'react-redux';
import CardContainer from '../components/CardContainer.jsx';

const mapStateToProps = store => ({
  discussions: store.discussions,
});

const mapDispatchToProps = dispatch => ({
  filterDiscussions: (filteredDiscussions, searchTerm) => {
    dispatch(filterDiscussions(filteredDiscussions, searchTerm));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
