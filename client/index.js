import React from "react";
import { Provider } from "react-redux";
import ReactDom from "react-dom";

import store from "./store/store";
import { App } from "./components";
import { sendMessage } from "./actions/connection";

window.sendMessage = sendMessage;
/* eslint-disable */

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
/* eslint-enable */

const cont = document.getElementById(`root`);

ReactDom.render(<Root />, cont);
