const userTypes = {
  admin: "ADMIN",
  user: "USER",
  anonymous: "ANONYMOUS",
};

function session(socket) {
  const user = socket.session;

  if (!(user && user.types)) return userTypes.anonymous;

  return userTypes[socket.user.type] || userTypes.anonymous;
}

exports.userTypes = userTypes;
exports.session = session;
