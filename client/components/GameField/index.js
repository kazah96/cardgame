import { connect } from "react-redux";
import { changePosition } from "actions/gameObject";

import Component from "./GameField";

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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
