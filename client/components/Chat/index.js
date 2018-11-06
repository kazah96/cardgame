import Component from './Chat.jsx';
import { connect } from 'react-redux';
import { sendMessageToUser } from "../../actions/chat";

function mapStateToProps(state) {
        return {
            users: state.stats.users,
        }
    }

function mapDispatchToProps(dispatch) {
    return {
        sendMessage: ({ id, message }) => dispatch(sendMessageToUser({ id, message })),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);