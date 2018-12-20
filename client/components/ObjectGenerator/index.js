import { connect } from "react-redux";

// import { WrappedComponent } from "components/GameObject";
// import Imaged from "components/GameObject/Imaged";
// import InputHandler from "components/GameObject/InputHandler";
// import AiHandler from "components/GameObject/AiHandler";
// import Clamped from "components/GameObject/Clamped";
// import Ranged from "components/GameObject/Ranged";
// import MovingObject from "components/GameObject/MovingObject";

import objectActions from "actions/gameObject";

import ObjectFactory from "game/objectFactory/objectFactory";

const mapDispatchToProps = (dispatch, props) => ({
  move: ({ x, y }) => dispatch(objectActions.setPosition(props.id, { x, y })),
});
const mapStateToProps = (state, ownProps) => {
  const obj = state.game.objects[ownProps.id];
  const { mapWidth, mapHeight } = state.game.config;
  return {
    ...obj,
    objects: state.game.objects,
    mapWidth,
    mapHeight,
  };
};

export default function({ objectName, overrideParams }) {
  const factory = new ObjectFactory({ objectName, overrideParams });
  const Component = factory.getComponent();
  const aaa = factory.getObject();

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Component);
}
