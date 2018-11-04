import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ReactDom from 'react-dom';
import { App } from './components';

class Root extends Component {
    render() {
        return <Provider store={store}>
            <App />
        </Provider>
    }
}

let cont = document.getElementById("root");

ReactDom.render(<Root />, cont);