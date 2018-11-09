import App from './App';
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { connect as socketConnect } from '../../actions/connection';
import { sendMessage } from '../../actions/connection';
import { sendHandshake } from '../../actions/session';

const mapStateToProps = (state) => {
    return {
        modal: state.modal.name,
        currentUser: state.currentUser,
        array: state.array,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        connectToServer: () => dispatch(socketConnect()),
        sendMessage: data => dispatch(sendMessage("BEST TYPE", { data })),
        sendHandshake: () => dispatch(sendHandshake()),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);