import { createActions } from "redux-actions";
import configActions from "actions/gameConfig";

function load(url) {
  return new Promise((accept, reject) =>
    fetch(url)
      .then(response => response.json().then(accept))
      .catch(reject),
  );
}

const {
  game: { map },
} = createActions({
  GAME: {
    MAP: {
      ADD: undefined,
      LOAD: undefined,
    },
  },
});

map.load = name => dispatch => {
  load(`assets/maps/${name}.json`).then(data => {
    dispatch(map.add({ name, map: data }));
    dispatch(configActions.setMapSize({
      height: data.height * data.tileheight,
      width: data.width * data.tilewidth,
    }));
  });
};

export default map;
