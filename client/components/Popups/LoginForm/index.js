import { connect } from "react-redux";
import { login } from "actions/login";
import { closeModal } from "actions/modal";

import LoginForm from "./LoginForm";

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: ({ username, password }) => {
      dispatch(login({ username, password }));
      dispatch(closeModal());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
