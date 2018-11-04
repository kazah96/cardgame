const actions = require("./actions");
const { session, userTypes } = require("./sessionManager");

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
};

module.exports = (ws, msg) => {
  const msgLevel = filterTable[msg.type] || defaultLevel;
  let connectionLevel = 0;

  const user = session(ws);
  switch (user.type) {
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

  if (connectionLevel >= msgLevel) return true;

  return false;
};
