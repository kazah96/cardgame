const store = require("./store");

let onMessage = undefined;
let sendMessage = undefined;

function onMessage(msg) {
    switch(msg.type) {
        case "JOIN_GAME": 
            
    }
    
}

function init(onmessage, send) {
    onmessage(onMessage);


}