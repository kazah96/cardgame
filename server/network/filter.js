const actions = require("./actions");
const userTypes = require("./userTypes");

const levels = {
  anonymous: 0,
  user: 2,
  admin: 8,
};

const defaultLevel = levels.user;

const filterTable = {
  [actions.handshake]: levels.anonymous,
  [actions.peerConnected]: levels.anonymous,
  [actions.peerDisconnected]: levels.anonymous,
  [actions.login]: levels.anonymous,
  [actions.userRegister]: levels.anonymous,
};

module.exports = function filterMiddleware({ ws, msg }) {
  let msgLevel = filterTable[msg.type];
  if (msgLevel === undefined) {
    msgLevel = defaultLevel;
  }
  let connectionLevel = 0;

  const { type } = ws.session;
  switch (type) {
    case userTypes.admin:
      connectionLevel = levels.admin;
      break;
    case userTypes.user:
      connectionLevel = levels.user;
      break;
    case userTypes.anonymous:
      connectionLevel = levels.anonymous;
      break;
    default:
      connectionLevel = levels.anonymous;
  }

  if (connectionLevel >= msgLevel) return { ws, msg };

  ws.send("UNAUTHORIZED");
  return null;
};
