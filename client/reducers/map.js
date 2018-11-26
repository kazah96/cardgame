import { handleActions} from 'redux-actions';
import mapActions from 'actions/map';

const reducer = handleActions({
    [mapActions.add]: (state, action) => ({
        ...state,
        [action.payload.name]: { ...action.payload.map }
    }),
}, { data: undefined }
);

export default reducer;