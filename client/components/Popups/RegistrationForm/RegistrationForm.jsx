import style from './style.css';
import React, { Component } from 'react';
import Input from '../../Input';

class RegistrationForm extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      year: '',
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
      <Input
        className={style.input}
        onChange={value => this.setState({ year: value })}
        placeholder="year" />

      <div className={style.submit} onClick={() =>
        this.props.onClick({ ...this.state})}
      >
        SUBMIT
      </div>
    </div>
  }
}

export default RegistrationForm;