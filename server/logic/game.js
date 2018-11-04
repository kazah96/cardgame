const { send, emitter, broadcast } = require("../network/interface");
const actions = require("../network/actions");
const registerUser = require("../actions/registerUser");

function randGenerator(digits) {
  const symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";
  const arr = [];
  for (let index = 0; index < digits; index += 1) {
    arr.push(symbols[Math.round(Math.random() * symbols.length)]);
  }
  return arr.join("");
}

function generateRandPosition() {
  return {
    x: Math.round(Math.random() * 200),
    y: Math.round(Math.random() * 200),
  };
}

const state = { position: { x: 60, y: 60 } };

emitter.on(actions.peerConnected, (msg) => {
  broadcast(actions.setPosition, state.position);
});

emitter.on(actions.sessionEstablish, (msg) => {
  if (msg.data.sessionId === null || msg.data.sessionId === undefined) {
    send(msg.id, actions.sessionEstablish, { sessionId: randGenerator(20) });
  }
});

emitter.on(actions.userRegister, (msg) => {
  if (msg.data !== undefined) {
    registerUser(msg.data).then(user => send(msg.id, actions.registerUser, user))
      .catch(error => send(msg.id, actions.error, error));
  }
});

emitter.on(actions.setPosition, (msg) => {

  const position = state.position;
  position.x = msg.data.x;
  position.y = msg.data.y;

  broadcast(actions.setPosition, position);
});
