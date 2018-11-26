import { createActions, handleActions, combineActions } from 'redux-actions';

function load(url) {
  return new Promise((accept, reject) =>
    fetch(url)
      .then(response => response.json().then(accept))
      .catch(reject));
};

const { game: { map } } = createActions({
  GAME:
  {
    MAP: {
      ADD: undefined,
      LOAD: undefined,
    },
  },
}
);

map.load = (name) => {
  return dispatch => {
    return load(`assets/maps/${name}.json`).then(data =>
      dispatch(map.add({ name, map: data }))
    );
  }
};


export default map;