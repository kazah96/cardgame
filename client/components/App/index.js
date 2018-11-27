import { connect } from "react-redux";
import { connect as socketConnect, sendMessage } from "actions/connection";
import { sendHandshake } from "actions/session";

import App from "./App";

const mapStateToProps = state => ({
  modal: state.modal.name,
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  connectToServer: () => dispatch(socketConnect()),
  sendMessage: data => dispatch(sendMessage(`BEST TYPE`, { data })),
  sendHandshake: () => dispatch(sendHandshake())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
