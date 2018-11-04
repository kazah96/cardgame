export const actions = {
    "SHOW_ALERT": (dispatch, data) => {
        alert(data);
    },
    "CONSOLE_LOG": (dispatch, data) => {
        console.log(data);
    },
    "SET_POSITION": (dispatch, data) => {
        dispatch({ type: "SET_POSITION", data });
    },
}

export function emitAction(dispatch, message) {
    const action = actions[message.type];

    if (!action) {
        console.log("No such action");
        return;
    }

    action(dispatch, message.data);
}