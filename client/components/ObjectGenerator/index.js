import { connect } from "react-redux";
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

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Component);
}
