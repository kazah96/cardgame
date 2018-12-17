import React from "react";
import { Provider } from "react-redux";
import ReactDom from "react-dom";


import { App } from "components";
import { sendMessage } from "actions/connection";
import store from "./store/store";

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
