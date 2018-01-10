import { connect } from 'react-redux';
import DiscussionForm from '../components/DiscussionForm.jsx';

const mapStateToProps = store => ({
  discussions: store.discussions,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscussionForm);
