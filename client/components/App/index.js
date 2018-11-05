import App from './App.jsx';
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { connect as socketConnect } from '../../actions/connection';
import { sendMessage } from '../../actions/connection';

const mapStateToProps = (state) => {
    return {
        modal: state.modal.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch(socketConnect()),
        sendMessage: data => dispatch(sendMessage("BEST TYPE", { data }))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);