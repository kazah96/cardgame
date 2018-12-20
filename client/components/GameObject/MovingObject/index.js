import React from "react";
import PropTypes from "prop-types";
import contextProvider from "store/contextProvider";
import { isInRange } from "utils/gameMath";

export default function WrapComponent(Component) {
  return class Moving extends React.PureComponent {
    static contextType = contextProvider;

    static propTypes = {
      move: PropTypes.func.isRequired,
      speed: PropTypes.number,
      range: PropTypes.number,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    };

    static defaultProps = {
      speed: 4,
      range: 200,
    };

    constructor(props) {
      super(props);

      this.state = {};
    }

    componentDidMount() {
      const { emitter } = this.context;

      this.setEmitter(emitter);
    }

    componentWillUnmount() {
      const { emitter } = this.context;

      this.resetEmitter(emitter);
    }

    move = ({ x, y }) => {
      this.setState({ dirX: x, dirY: y });
    };

    stop = () => {
      this.setState({ dirX: undefined, dirY: undefined });
    };

    actionTable = () => ({
      tick: this.tick,
    });

    setEmitter = emitter => {
      const table = this.actionTable();

      Object.keys(table).forEach(key => {
        emitter.on(key, table[key]);
      });
    };

    resetEmitter = emitter => {
      const table = this.actionTable();
      Object.keys(table).forEach(key => {
        emitter.off(key, table[key]);
      });
    };

    tick = () => {
      const { move, x, y, speed } = this.props;
      const { dirX, dirY } = this.state;
      if (dirX === undefined || dirY === undefined) return;

      if (isInRange({ x, y, dirX, dirY, range: speed })) {
        this.stop();
        return;
      }

      const offsetX = dirX - x;
      const offsetY = dirY - y;

      const maxOffset = Math.max(Math.abs(offsetX), Math.abs(offsetY));

      const X = offsetX / maxOffset;
      const Y = offsetY / maxOffset;

      move({
        x: x + X * speed,
        y: y + Y * speed,
      });
    };

    render() {
      return (
        Component && (
          <Component {...this.props} move={this.move} stop={this.stop} />
        )
      );
    }
  };
}
