import style from './style.css';
import React, { Component } from 'react';
import Input from '../../Input';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      password: '',
    }
  }

  render() {
    return <div className={style.container}>
      <Input
        className={style.input}
        onChange={value => this.setState({ name: value })}
        placeholder="name" />
      <Input
        className={style.input}
        onChange={value => this.setState({ password: value })}
        placeholder="password" />

      <div className={style.submit} onClick={() =>
        this.props.onClick({ username: this.state.name, password: this.state.password })}
      >
        SUBMIT
      </div>
    </div>
  }
}

export default LoginForm;