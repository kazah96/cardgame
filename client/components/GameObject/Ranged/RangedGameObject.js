import React from "react";
import PropTypes from "prop-types";

function WrapComponent(Component) {
  return class RangedGameObject extends React.PureComponent {
    static propTypes = {
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    };

    render() {
      return <Component {...this.props} />;
    }
  };
}

export default WrapComponent;
