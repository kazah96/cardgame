import { createActions } from "redux-actions";

const {
  game: { config },
} = createActions({
  GAME: {
    CONFIG: {
      SET_MAP_SIZE: ({ width, height }) => ({ width, height }),
    },
  },
});

export default config;
