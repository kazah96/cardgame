const actionTypes = {
  SET_POSITION: (state, data) => ({
    ...state,
    position: data
  })
};

const initState = {
  position: {
    x: 100,
    y: 100
  }
};

export default function(state = initState, action) {
  const func = actionTypes[action.type];

  if (!func) return state;

  return func(state, action.data);
}
