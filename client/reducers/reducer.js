export default function (state = {}, action) {
  switch (action.type) {
    case "DA":
      return { ...state, data: action.data };
    default:
      return state;
  }
} 