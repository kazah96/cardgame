import { connect } from "react-redux";

import { WrappedComponent } from "components/GameObject";
import Imaged from "components/GameObject/Imaged";
import InputHandler from "components/GameObject/InputHandler";
import AiHandler from "components/GameObject/AiHandler";
import Clamped from "components/GameObject/Clamped";
import Ranged from "components/GameObject/Ranged";
import MovingObject from "components/GameObject/MovingObject";

import objectActions from "actions/gameObject";

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

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

export default function(obj) {
  const fns = [];
  fns.push(WrappedComponent);
  fns.push(Imaged);
  fns.push(Clamped);
  fns.push(Ranged);
  fns.push(MovingObject);
  fns.push(obj.type === "ai" ? AiHandler : InputHandler);

  const Component = compose(...fns)();

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Component);
}
