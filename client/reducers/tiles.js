import { handleActions } from 'redux-actions';
import tiles from 'actions/tiles';

const reducer = handleActions({
  [tiles.add]: (state, action) => ({
    ...state,
    [action.payload.name]: { ...action.payload.tileset },
  }),
}, { data: undefined });

export default reducer;
