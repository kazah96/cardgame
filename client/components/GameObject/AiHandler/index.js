import React from "react";
import PropTypes from "prop-types";
import contextProvider from "store/contextProvider";

export default function WrapComponent(Component) {
  return class GameObject extends React.PureComponent {
    static contextType = contextProvider;

    componentDidMount() {
      this.context.emitter.on("tick", this.tick);
    }

    componentWillUnmount() {
      this.context.emitter.off("tick", this.tick);
    }

    tick = () => {
      const randX = Math.round(Math.random() * 200 - 100);
      const randY = Math.round(Math.random() * 200 - 100);
      const { x, y } = this.props;

      const { move } = this.props;
      move({ x: x + randX, y: y + randY });
    };

    render() {
      return <>{Component && <Component {...this.props} />}</>;
    }
  };
}
