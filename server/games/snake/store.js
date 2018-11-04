const { createStore, applyMiddleware } = require("redux");

const reduxThunk = require("redux-thunk");
const reducer = require("./reducer");


const store = createStore({ gameState: reducer }, applyMiddleware(reduxThunk));

module.exports = store;
