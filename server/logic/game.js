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

function randColor() {
  const symbols = "ABCDF1234567890";
  const digits = 6;

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

function makeSession(ws) {
  if (ws.session.type !== userTypes.anonymous) {
    const { x, y } = generateRandPosition();
    connections[ws.id] = {
      ...ws.session,
      id: ws.id,
      x,
      y,
      color: randColor(),
    };
    broadcast("USERS_COUNT", { users: connections });
  }
}

outEmitter.on(actions.handshakeAccepted, ({ ws }) => {
  makeSession(ws);
});

outEmitter.on(actions.loginSuccess, ({ ws }) => {
  makeSession(ws);
});

emitter.on(actions.logout, ({ ws }) => {
  delete connections[ws.id];
  broadcast("USERS_COUNT", { users: connections });
});

emitter.on(actions.peerDisconnected, ({ ws }) => {
  delete connections[ws.id];
  broadcast("USERS_COUNT", { users: connections });
});

emitter.on(actions.sendMessageToUser, ({ ws, msg }) => {
  const conn = connections[msg.data.id];
  const date = Date.now();
  if (conn) send(msg.data.id, actions.showMessage, { message: msg.data.message, sender: ws.session.username, date });
});

emitter.on(actions.setMyPosition, ({ ws, msg }) => {
  const { x, y } = msg.data;

  connections[ws.id].x = x;
  connections[ws.id].y = y;

  broadcast("USERS_COUNT", { users: connections });

  // Object.keys(connections).forEach((id) => {
  //   if (id !== ws.id) {
  //     send(id, actions.setPosition, { id: ws.id, x, y });
  //   }
  // });
});
