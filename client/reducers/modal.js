export default function (state = {}, action) {
  switch (action.type) {
    case `SHOW_MODAL`:
      return {
        ...state,
        name: action.name,
      };
    case `CLOSE_MODAL`:
      return {
        ...state,
        name: null,
      };
    default: return state;
  }
}
