import { handleActions } from "redux-actions";
import configActions from "actions/gameConfig";

const reducer = handleActions(
  {
    [configActions.setMapSize]: (state, action) => ({
      ...state,
      mapWidth: action.payload.width,
      mapHeight: action.payload.height,
    }),
  },
  {},
);

export default reducer;
