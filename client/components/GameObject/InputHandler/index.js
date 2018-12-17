import React from "react";
import contextProvider from "store/contextProvider";

export default function WrapComponent(Component) {
  return class GameObject extends React.PureComponent {
    static contextType = contextProvider;

    componentDidMount() {
      const { emitter } = this.context;

      emitter.on(`mouseClick`, this.onKeyDown);
    }

    componentWillUnmount() {
      const { emitter } = this.context;
      
      emitter.off(`mouseClick`, this.onKeyDown);
    }

    onKeyDown = ({ x, y }) => {
      const { move } = this.props;
      move({ x, y });
    };

    render() {
      return <>{Component && <Component {...this.props} />}</>;
    }
  };
}
