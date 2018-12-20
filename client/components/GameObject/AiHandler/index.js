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
        status: `idle`,
        dirX: 1,
        dirY: 1,
      };
    }

    componentWillUpdate = () => {
      const { objects, x, y } = this.props;
      const { status } = this.state;

      const player = Object.keys(objects).find(
        item => objects[item].type === `player`,
      );

      if (!player && status !== `idle`) {
        this.setState({ status: `idle` });
        return;
      }

      if (player && (player.x !== x || player.y !== y)) {
        this.setPlayerPos({ x: player.x, y: player.y });
      }
    };

    setPlayerPos = ({ x, y }) => {
      this.setState({ status: `chasing`, playerPos: { x, y } });
    };

    shoot = () => {};

    chase = () => {
      const { move, x, y, range } = this.props;
      const { playerPos } = this.state;

      if (
        x > playerPos.x - range &&
        x < playerPos.y + range &&
        (y > playerPos.y - range && y < playerPos.y + range)
      ) {
        this.shoot();
      }

      move({ ...playerPos });
    };

    idle = () => {
      const { x, y, move, speed } = this.props;
      const { dirX, dirY } = this.state;

      move({ x: x + dirX * speed, y: y + dirY * speed });
    };

    render() {
      return <>{Component && <Component {...this.props} />}</>;
    }
  };
}
