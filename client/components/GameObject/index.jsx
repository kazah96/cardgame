import React from "react";
import PropTypes from "prop-types";
import style from "./style";

function WrappedComponent(Component) {
  return class GameObject extends React.Component {
    static propTypes = {
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      mapWidth: PropTypes.number.isRequired,
      mapHeight: PropTypes.number.isRequired,
    };

    shouldComponentUpdate = prevProps => {
      if (prevProps !== this.props) return true;
      return false;
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
