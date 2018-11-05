export default function (state = {}, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        user: action.user
      }
    case "REMOVE_CURRENT_USER":
      return {
        ...state,
        user: undefined
      }
    default: return state;
  }
}