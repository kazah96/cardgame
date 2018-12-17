import React from "react";
import PropTypes from "prop-types";
import chicken from "../../../assets/chick2.png";

export default function WrapComponent(Component) {
  return class GameObject extends React.PureComponent {
    static propTypes = {
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    };

    render() {
      const { width, height } = this.props;
      return (
        <div>
          <img src={chicken} alt="asd" width={width} height={height} />
          {Component && <Component {...this.props} />}
        </div>
      );
    }
  };
}
