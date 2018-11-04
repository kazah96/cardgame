import style from './style.css';
import React, { Component } from 'react';

class SnakeGame extends Component {
  constructor() {
    super();
  }


  render() {
    const props = this.props;
    return <div ref={this.container} className={style.container}>

    </div>
  }
}

export default SnakeGame;