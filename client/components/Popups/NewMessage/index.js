import NewMessage from './NewMessage';
import { connect }  from "react-redux";

function mapStateToProps(state) {
    return {
        message: state.chat.message,
        sender: state.chat.sender,
        date: state.chat.date,
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);