import { connect } from "react-redux";
import chat from "actions/chat";
import Component from "./Chat";

function mapStateToProps(state) {
  return {
    users: state.stats.users,
    id: state.currentUser.user.id
  };
}

const fqw = 'Asd';

fqw.asd();

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: ({ id, message }) =>
      dispatch(chat.message.send({ id, message }))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
