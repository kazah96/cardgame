const state = {
    objects: {},
    player: {}
};


function messageRecieved(message) {
    switch (message.type) {
        case "SET_PLAYER_POSITION":

        case "SET_POSITION":
            state.objects[message.id].position = message.position;
            break;
        case "INIT_GAME":
            state.objects = { ...message.objects };
            break;

    }

}

function initGame() {

}

keyPress(event, position) {
    if (event.key === "ArrowUp") {
        position.y += 40;
        return position;
    }
    if (event.key === "ArrowDown") {
        position.y -= 40;
        return position;
    }
}

function onKeyDown(event) {

}

function init(onMessage, sendMessage) {
    onMessage(messageRecieved);
    document.addEventListener("keydown", onKeyDown)
}
