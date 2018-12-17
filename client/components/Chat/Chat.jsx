import React, { Component } from "react";
import cn from "classnames";
import shortid from "shortid";
import propTypes from "prop-types";
import { Input, Button } from "components";

import style from "./style";

class Chat extends Component {

  static propTypes = {
    id: propTypes.oneOfType([propTypes.number, propTypes.number]).isRequired,
    sendMessage: propTypes.func,
    users: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.oneOfType([propTypes.string, propTypes.number]),
        name: propTypes.string,
      }),
    ),
  };

  static defaultProps = {
    users: [],
    sendMessage: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: null,
    };
  }

  componentDidMount() {
  }

  onselect = key => {
    this.setState({ selected: key });
  };

  render() {
    const { users, sendMessage, id } = this.props;
    const { selected, message } = this.state;

    return (
      <div className={style.container}>
        <div className={style.online}>Онлайн:</div>
        <ul className={style.userList}>
          {users.map((item, key) => (
            <li
              onClick={() => this.onselect(key)}
              key={shortid.generate()}
              tabIndex={selected === key ? 0 : -1}
              className={cn({
                [style.userItem]: true,
                [style.selected]: selected === key,
              })}
            >
              {item.username}
              <span className={style.info}>
                {item.id}
                {item.id === id ? ` (Это вы)` : ``}
              </span>
            </li>
          ))}
        </ul>
        <div className={style.message}>
          <Input onChange={value => this.setState({ message: value })} />
          <Button
            name="Отправить"
            className={style.submit}
            onClick={() => {
              sendMessage({
                id: selected,
                message,
              });
            }}
          />
        </div>
      </div>
    );
  }
}

export default Chat;
