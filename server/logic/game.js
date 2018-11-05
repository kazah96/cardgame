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

emitter.on(actions.userRegister, ({ ws, msg }) => {
  registerUser({ ...msg.data })
    .then(() => send(ws.id, actions.userRegister, { message: "REGISTERED" }))
    .catch(error => send(ws.id, actions.error, { message: error }));
});
