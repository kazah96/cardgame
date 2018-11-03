const { send, emitter } = require("../network/interface");
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

emitter.on(actions.peerConnected, data => console.log(`piiizdec  coefdwe ${data.id}`));

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
