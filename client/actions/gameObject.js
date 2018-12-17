import { createActions } from "redux-actions";

const {
  game: { objects },
} = createActions({
  GAME: {
    OBJECTS: {
      SET_POSITION: (id, position) => ({...position, id}),
      ADD: ({id, object}) => ({id, object})
    },
  },
});


export default objects;
