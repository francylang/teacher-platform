import { connect } from 'react-redux';
import CardContainer from '../components/CardContainer.jsx';

const mapStateToProps = store => ({
  discussions: store.discussions,
  filteredDiscussions: store.filteredDiscussions,
  comments: store.comments,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
