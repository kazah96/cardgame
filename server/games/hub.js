const { send, emitter, broadcast } = require("../network/interface");
const actions = require("../network/actions");

let currentGame = undefined;

emitter.on(actions.requireGame, (message) => {
    if(currentGame !== undefined) {
        send(message.id, )
    } 
}}