import React from "react";
import PropTypes from "prop-types";

import { clamp } from "utils/gameMath";

export default function WrapComponent(Component) {
  return class Clamped extends React.PureComponent {
    static propTypes = {
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      mapWidth: PropTypes.number.isRequired,
      mapHeight: PropTypes.number.isRequired,
      move: PropTypes.func.isRequired,
    };

    move = ({ x, y }) => {
      const { width, heigth, mapWidth, mapHeight, move } = this.props;

      const clampedX = clamp(x, 0, mapWidth - (width || 0));
      const clampedY = clamp(y, 0, mapHeight - (heigth || 0));

      move({ x: clampedX, y: clampedY });
    };

    render() {
      return Component ? <Component {...this.props} move={this.move} /> : "";
    }
  };
}
