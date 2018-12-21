import { connect } from "react-redux";
import { wrapContext } from "store/contextProvider";
import objectActions from "actions/gameObject";
import shortId from "shortid";
import ObjectFactory from "game/objectFactory/objectFactory";

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
    onSpawn: param => {
      const factory = new ObjectFactory({
        objectName: param.type,
        overrideParams: { imaged: { hue: param.hue } },
      });

      dispatch(
        objectActions.add({
          id: shortId.generate(),
          object: { ...factory.getObject(), type: param.type },
        }),
      );
    },
  };
}

export default wrapContext(mapContextToProps)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(HUD),
);
