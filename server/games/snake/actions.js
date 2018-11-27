

exports.addPlayer = ({ id, position, color }, send) => (dispatch) => {
  dispatch(
    {
      type: "ADD_OBJECT",
      object: { id, position, color },
    },
  );

  send();


  return ({
    type: "ADD_OBJECT",
    object: { id, position, color },
  });
};
