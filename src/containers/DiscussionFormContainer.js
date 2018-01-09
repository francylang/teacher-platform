import { connect } from 'react-redux';
import DiscussionForm from '../components/DiscussionForm.jsx';

const mapStateToProps = store => ({
  // discussions: store.discussions,
  // filteredDiscussions: store.filteredDiscussions,
  // comments: store.comments,
});

const mapDispatchToProps = dispatch => ({
  // filterDiscussions: (filteredDiscussions, searchTerm) => {
  //   dispatch(filterDiscussions(filteredDiscussions, searchTerm));
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscussionForm);
