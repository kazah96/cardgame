const actions = require("./actions");

module.exports = function makeEmitterMiddleware(emitter, send) {
  return function emitterMiddleware({ ws, msg }) {
    if (!Object.keys(actions)
      .some(item => actions[item] === msg.type)) {
      console.log("no such msg type");
      send(ws.id, actions.error, { message: `NO REQUEST: ${msg.type}` });
    }

    const data = { ...msg };

    const message = { ws, msg: data };
    emitter.emit(msg.type, message);
    return { ws, msg };
  };
};
