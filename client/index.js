import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ReactDom from 'react-dom';
import { App } from './components';
import { sendMessage } from './actions/connection';

window.sendMessage = sendMessage;

class Root extends Component {
    render() {
        return <Provider store={store}>
            <App />
        </Provider>
    }
}

let cont = document.getElementById("root");

ReactDom.render(<Root />, cont);