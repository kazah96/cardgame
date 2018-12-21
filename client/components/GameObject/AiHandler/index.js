import React from "react";
import PropTypes from "prop-types";
import contextProvider from "store/contextProvider";

export default function WrapComponent(Component) {
  return class GameObject extends React.PureComponent {
    static contextType = contextProvider;

    static propTypes = {
      speed: PropTypes.number,
      range: PropTypes.number,
    };

    static defaultProps = {
      speed: 4,
      range: 200,
    };

    constructor(props) {
      super(props);

      this.state = {
        status: "idle",
        dirX: 1,
        dirY: 1,
      };
    }

    componentDidMount() {
      setInterval(() => {
        this.idle();
      }, 500);
    }

    componentWillUpdate = () => {};

    idle = () => {
      const { x, y, move, speed } = this.props;
      const randX = Math.random() * 100 - 50;
      const randY = Math.random() * 100 - 50;
      
      move({ x: x + randX * speed, y: y + randY * speed });
    };

    render() {
      return <>{Component && <Component {...this.props} />}</>;
    }
  };
}
