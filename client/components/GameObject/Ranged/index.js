import React from "react";
import PropTypes from "prop-types";

function WrapComponent(Component) {
  return class RangedGameObject extends React.PureComponent {
    static propTypes = {
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    };

    getRange = () => {
      const range = 400;

      const { objects, x, y, id } = this.props;

      const ranged = Object.keys(objects)
        .filter(key => {
          const item = objects[key];
          return (
            x < item.x + range &&
            x > item.x - range &&
            (y < item.y + range && y > item.y - range) &&
            id !== key
          );
        })
        .reduce((obj, key) => {
          obj[key] = objects[key];
          return obj;
        }, {});

      return ranged;
    };

    render() {
      return <Component {...this.props} objects={this.getRange()} />;
    }
  };
}

export default WrapComponent;
