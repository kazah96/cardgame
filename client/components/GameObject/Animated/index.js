import React from "react";

export default function WrapComponent(Component) {
  return class Animated extends React.PureComponent {
    render() {
      return Component && <Component {...this.props} move={this.move} />;
    }
  };
}
