import { connect } from 'react-redux';
import Component from './GameObject';
import { changePosition } from '../../actions/gameObject';

function mapStateToProps(state, ownProps) {
  if (!state.stats.users) {
    return {
      x: 0,
      y: 0,
      id: ownProps.id,
    };
  }

  const user = state.stats.users[ownProps.id];
  const {
    x, y, color, id,
  } = user;

  return {
    x, y, color, isPlayer: id === ownProps.id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changePosition: ({ x, y }) => dispatch(changePosition({ x, y })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
