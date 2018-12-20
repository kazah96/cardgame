import React from "react";
import PropTypes from "prop-types";
import chicken from "../../../assets/chick2.png";

export default function WrapComponent(Component) {
  return class GameObject extends React.PureComponent {
    static propTypes = {
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      hue: PropTypes.number,
    };

    static defaultProps = {
      hue: 0,
    };

    render() {
      const { width, height, hue } = this.props;
      return (
        <div>
          <img
            src={chicken}
            alt="asd"
            style={{ filter: `hue-rotate(${hue}deg)`}}
            width={width}
            height={height}
          />
          {Component && <Component {...this.props} />}
        </div>
      );
    }
  };
}
