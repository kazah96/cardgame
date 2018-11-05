const { send, outEmitter, emitter, broadcast } = require("../network/interface");
const actions = require("../network/actions");
const registerUser = require("../actions/registerUser");
const userTypes = require("../network/userTypes");


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

emitter.on(actions.userRegister, ({ ws, msg }) => {
  registerUser({ ...msg.data })
    .then(() => send(ws.id, actions.userRegister, { message: "REGISTERED" }))
    .catch(error => send(ws.id, actions.error, { message: error }));
});

const connections = {};

outEmitter.on(actions.handshakeAccepted, ({ ws }) => {
  if (ws.session.type !== userTypes.anonymous) {
    connections[ws.id] = ws.session;
    broadcast("USERS_COUNT", { users: connections });
  }
});

outEmitter.on(actions.loginSuccess, ({ ws }) => {
  if (ws.session.type !== userTypes.anonymous) {
    connections[ws.id] = ws.session;
    broadcast("USERS_COUNT", { users: connections });
  }
});

emitter.on(actions.logout, ({ ws }) => {
  delete connections[ws.id];
  broadcast("USERS_COUNT", { users: connections });
});

emitter.on(actions.peerDisconnected, ({ ws }) => {
  delete connections[ws.id];
  broadcast("USERS_COUNT", { users: connections });
});
