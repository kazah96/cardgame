import { connect } from 'react-redux';
import Component from './GameField';
import { changePosition } from '../../actions/gameObject';

function mapStateToProps(state) {
  return {
    users: state.stats.users,
    currentUser: state.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changePosition: ({ x, y }) => dispatch(changePosition({ x, y })),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
