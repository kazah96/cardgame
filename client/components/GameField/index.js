import { connect } from "react-redux";
import configActions from "actions/gameConfig";

import Component from "./GameField";

function mapStateToProps(state) {
  return {
    users: state.stats.users,
    currentUser: state.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMapSize: ({ width, height }) =>
      dispatch(configActions.setMapSize({ width, height })),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
