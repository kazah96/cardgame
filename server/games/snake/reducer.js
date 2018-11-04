const actionTypes = {
  ADD_OBJECT: (state, data) => ({
    ...state,
    [data.id]: data.object,
  }),
  SET_OBJ_POSITION: (state, data) => ({
    ...state,
    [data.id]: { ...state[data.id], position: data.position },
  }),
  SET_OBJ_COLOR: (state, data) => ({
    ...state,
    [data.id]: { ...state[data.id], color: data.color },
  }),
};

export default function (state = {}, action) {
  const func = actionTypes[action.type];

  if (!func) return state;

  return func(state, action.data);
}
