const initState = {
  users: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case `SET_USERS_COUNT`:
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
}
