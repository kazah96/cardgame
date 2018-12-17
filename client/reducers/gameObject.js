import { handleActions } from "redux-actions";
import objectActions from "actions/gameObject";

const reducer = handleActions(
  {
    [objectActions.setPosition]: (state, action) => ({
      ...state,
      [action.payload.id]: {
        ...state[action.payload.id],
        x: action.payload.x,
        y: action.payload.y,
      },
    }),
    [objectActions.add]: (state, action) => ({
      ...state,
      [action.payload.id]: {
        ...action.payload.object,
      },
    }),
  },
  {},
);

export default reducer;
