const initialState = [5, 10];

export default function array(state = initialState, action) {
  switch (action.type) {
    case `SAVE_POSITION`:
      const result = [...state];
      result[action.id] = action.position;
      return result;
    default:
      return initialState;
  }
} 