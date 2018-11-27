import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import App from './App';
import { connect as socketConnect } from '../../actions/connection';
import { sendMessage } from '../../actions/connection';
import { sendHandshake } from '../../actions/session';

const mapStateToProps = state => ({
  modal: state.modal.name,
  currentUser: state.currentUser,
  array: state.array,
});

const mapDispatchToProps = dispatch => ({
  connectToServer: () => dispatch(socketConnect()),
  sendMessage: data => dispatch(sendMessage(`BEST TYPE`, { data })),
  sendHandshake: () => dispatch(sendHandshake()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
