const { send, broadcast, emitter } = require("../network/interface");
const actions = require("../network/actions");

function randGenerator(digits) {
  const symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";
  const arr = [];
  for (let index = 0; index < digits; index++) {
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
