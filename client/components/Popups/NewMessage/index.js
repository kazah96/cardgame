import { connect } from "react-redux";
import NewMessage from "./NewMessage";

function mapStateToProps(state) {
  return {
    message: state.chat.message,
    sender: state.chat.sender,
    date: state.chat.date
  };
}

export default connect(mapStateToProps)(NewMessage);
