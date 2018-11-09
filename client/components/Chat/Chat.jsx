import style from './style';
import React, { Component } from 'react';
import cn from "classnames/bind"
import { Input, Button } from '..';

class Chat extends Component {
  constructor() {
    super();

    this.state = {
      selected: null
    }
  }

  onselect = (key) => {
    this.setState({ selected: key });
  }

  render() {
    const props = this.props;
    const cx = cn.bind(style);

    return <div className={style.container}>
      <div className={style.online}>Онлайн:</div>
      <div className={style.userList}>
        {props.users && props.users.map((item, key) => <div
          onClick={() => this.onselect(key)}
          key={key}
          className={cx({
            userItem: true,
            selected: this.state.selected === key
          })}
        >
          {item.username}
          <span className={style.info}>[{item.id}] {item.id === props.id ? " (Это вы)" : ""}</span>
        </div>)}
      </div>
      <div className={style.message}>
        <Input onChange={value => this.setState({ message: value })} />


        <Button
          name="Отправить"
          className={style.submit}
          onClick={() => props.sendMessage({ id: this.state.selected, message: this.state.message })} />


      </div>
    </div>
  }
}

export default Chat;