import { connect } from 'react-redux';
import CardContainer from '../components/CardContainer.jsx';

const mapStateToProps = store => ({
  discussions: store.discussions,
});

export default connect(mapStateToProps, null)(CardContainer);
