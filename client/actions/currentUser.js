export function setCurrentUser(user) {
  return {
    type: `SET_CURRENT_USER`,
    user,
  };
}

export function removeCurrentUser() {
  return {
    type: `REMOVE_CURRENT_USER`,
  };
}
