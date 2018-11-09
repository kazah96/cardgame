import style from './style';
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
        placeholder="Имя" />

      <Input
        className={style.input}
        onChange={value => this.setState({ password: value })}
        placeholder="Пароль" />

      <Button
        className={style.button}
        name="Войти"
        onClick={() => this.props.onClick({ ...this.state })} />



    </div>
  }
}

export default LoginForm;