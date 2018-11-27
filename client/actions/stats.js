export function setUsersCount(users) {
  return {
    type: `SET_USERS_COUNT`,
    users: Object.keys(users).map(item => users[item]),
  };
}
