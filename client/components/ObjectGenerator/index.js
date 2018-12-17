import { connect } from "react-redux";

import { WrappedComponent } from "components/GameObject";
import Imaged from "components/GameObject/Imaged";
import InputHandler from "components/GameObject/InputHandler";
import AiHandler from "components/GameObject/AiHandler";
import Clamped from "components/GameObject/Clamped";

import objectActions from "actions/gameObject";

const mapDispatchToProps = (dispatch, props) => ({
  move: ({ x, y }) => dispatch(objectActions.setPosition(props.id, { x, y })),
});
const mapStateToProps = (state, ownProps) => {
  const obj = state.game.objects[ownProps.id];
  const { mapWidth, mapHeight } = state.game.config;
  return {
    ...obj,
    mapWidth,
    mapHeight,
  };
};

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

export default function(obj) {
  let Component;
  switch (obj.type) {
    case `ai`:
      Component = compose(
        WrappedComponent,
        Imaged,
        AiHandler,
      )();
      break;
    case `player`:
      Component = compose(
        WrappedComponent,
        Imaged,
        InputHandler,
      )();
      break;
    default:
      Component = WrappedComponent(Clamped(Imaged(AiHandler())));
      break;
  }

  // const fns = [];
  // fns.push(Imaged);
  // fns.push(obj.type === `ai` ? AiHandler : InputHandler);
  // fns.push(WrappedComponent);

  // const Component = compose(Image, WrappedComponent);
  // debugger;
  // const Component = WrappedComponent(Imaged(AiHandler()));

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Component);
}
