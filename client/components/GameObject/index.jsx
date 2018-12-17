import React from "react";
import PropTypes from "prop-types";

import style from "./style";

function WrappedComponent(Component) {
  return class GameObject extends React.PureComponent {
    static propTypes = {
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      heigth: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      mapWidth: PropTypes.number.isRequired,
      mapHeight: PropTypes.number.isRequired,
      setPosition: PropTypes.func.isRequired,
    };

    componentDidUpdate() {}

    render() {
      const { x, y } = this.props;

      return (
        <div className={style.objectPos} style={{ top: y, left: x }}>
          {Component && <Component {...this.props} />}
        </div>
      );
    }
  };
}

export { WrappedComponent };
export default WrappedComponent();
