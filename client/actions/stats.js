export function setUsersCount(users) {
  console.log(users);
  return {
    type: `SET_USERS_COUNT`,
    users: Object.keys(users).map(item => users[item]),
  };
}
