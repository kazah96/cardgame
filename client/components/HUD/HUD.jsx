import React from "react";
import PropTypes from "prop-types";

import RightPanel from "./RightPanel";

export default class HUD extends React.PureComponent {
  static propTypes = {
    onSpawn: PropTypes.func.isRequired,
  };

  render() {
    const { onSpawn } = this.props;
    return (
      <React.Fragment>
        <RightPanel onSpawn={onSpawn} />
      </React.Fragment>
    );
  }
}
