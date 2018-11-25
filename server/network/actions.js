const actions = {
  peerConnected: "PEER_CONNECTED",
  peerDisconnected: "PEER_DISCONNECTED",
  sessionEstablish: "ESTABLISH_SESSION",
  userRegister: "USER_REGISTER",
  error: "ERROR",
  requireGame: "REQUIRE_GAME",
  login: "LOGIN",
  logout: "LOGOUT",
  loginSuccess: "LOGIN_SUCCESS",
  loginFail: "LOGIN_FAIL",
  handshake: "HANDSHAKE",
  handshakeAccepted: "HANDSHAKE_ACCEPTED",
  handshakeRejected: "HANDSHAKE_REJECTED",
  unauthorized: "UNAUTHORIZED",
  sendMessageToUser: "SEND_MESSAGE_TO_USER",
  showMessage: "SHOW_MESSAGE",
  setPosition: "SET_POSITION",
  setMyPosition: "SET_MY_POSITION",
  getMap: "GAME/GET_MAP",
  getTileSet: "GAME/GET_TILE_SET",

};

module.exports = actions;
