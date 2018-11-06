import style from './style.css';
import React, { Component } from 'react';
import Input from '../../Input';
import { Button } from '../../index';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    }
  }

  render() {


    return <div className={style.container}>
      <Input
        className={style.input}
        onChange={value => this.setState({ username: value })}
        placeholder="name" />

      <Input
        className={style.input}
        onChange={value => this.setState({ password: value })}
        placeholder="password" />

      <Button
        className={style.button}
        name="ASdsads"
        onClick={() => this.props.onClick({ ...this.state })} />



    </div>
  }
}

export default LoginForm;