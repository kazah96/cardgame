import { createActions, handleActions, combineActions } from 'redux-actions';

function load(url) {
  return new Promise((accept, reject) =>
    fetch(url)
      .then(response => response.json().then(accept(data)))
      .catch(reject));
};

const { game: { tiles } } = createActions({
  GAME:
  {
    TILES: {
      ADD: undefined,
      LOAD: undefined,
    },
  },
}
);

tiles.load = (name) => {
  return dispatch => {
    load(`assets/tiles/${name}.json`).then(
      dispatch(tiles.add({ name, tileset: data }))
    )
  }
};

export default tiles;