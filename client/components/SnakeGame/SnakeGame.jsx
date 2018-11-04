import style from './style.css';
import React, { Component } from 'react';
import { onMessage, sendMessage } from '../../actions/connection';

function createGame() {
  sendMessage("CREATE_GAME", { game: 2 });
}

class SnakeGame extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    onMessage(message => {
      if (message.type !== "GAME") return;

      console.log(this.container);

      const div = document.createElement("div");
      console.log(message);
      div.classList.add(style.obj);
      div.style.top = message.data.y + 'px';
      div.style.left = message.data.x + 'px';
      div.style.background = message.data.color;
      this.container.appendChild(div);
    })
  }



  render() {
    const props = this.props;
    return <div ref={o => this.container = o} className={style.container}>
      <div onClick={createGame}>Создать игру</div>

    </div>
  }
}

export default SnakeGame;