import { connect } from "react-redux";
import { wrapContext } from "store/contextProvider";
import objectActions from "actions/gameObject";
import shortId from "shortid";

import HUD from "./HUD";

function mapStateToProps() {
  return {};
}

function mapContextToProps() {
  return {
    // onSpawn: (data) => emitter.emit(`SPAWN_OBJECT`, data),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSpawn: param =>
      dispatch(
        objectActions.add({
          id: shortId.generate(),
          object: { width: 43, height: 43, x: 50, y: 50, ...param },
        }),
      ),
  };
}

export default wrapContext(mapContextToProps)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(HUD),
);
