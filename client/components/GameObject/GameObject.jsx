import style from './style.css';
import React, { Component } from 'react';

class GameObject extends Component {
  constructor() {
    super();
  }

  keyPress(event, position) {
    if (event.key === "ArrowUp") {
      position.y += 40;
      return position;
    }
    if (event.key === "ArrowDown") {
      position.y -= 40;
      return position;
    }
  }

  componentDidMount() {
    const props = this.props;
    console.log(props);
    document.addEventListener("keydown", event =>
      props.changePosition(
       this.keyPress(event, props.position)
      )
    )
  }


  render() {
    const props = this.props;
    return <div
      style={{ top: props.position.y + 'px', left: props.position.x + 'px' }}
      className={style.gameObject}>
    </div>
  }
}

export default GameObject;