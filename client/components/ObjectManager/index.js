import { connect } from "react-redux";

import Component from "./ObjectManager";

function mapStateToProps(state) {
  return {
    objects: state.game.objects,
  };
}

export default connect(mapStateToProps)(Component);
