export default function (state = { message: {} }, action) {
    switch (action.type) {
        case "SHOW_MESSAGE":
            return {
                ...state,
                message: action.message,
                sender: action.sender,
                date: action.date
            }
        default: return state;
    }
} 