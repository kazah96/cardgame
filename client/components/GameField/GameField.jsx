import style from './style.css';
import React, { Component } from 'react';
import cn from "classnames/bind";

class GameField extends Component {
  constructor() {
    super();
  }

  click = (event) => {
    if (this.gameContainer.contains(event.target)) {
      var bounds = this.gameContainer.getBoundingClientRect();
      var x = event.clientX - bounds.left;
      var y = event.clientY - bounds.top;
      this.props.changePosition({ x: x-20, y: y-20 })
    }
  }

  release = () => {
    this.mouseActive = false;
  }

  onDrag = (event) => {
    if (!this.mouseActive) return;
    event.preventDefault();
    event.stopPropagation();

    const point = {};
    point.x = event.pageX;
    point.y = event.pageY;

  }

  onTouch = (e) => {
    const x = e.changedTouches[0].pageX;
    const y = e.changedTouches[0].pageY;
    this.props.changePosition({ x: x - 20, y: y - 20 })
  }

  componentWillMount() {
    document.addEventListener("mousedown", this.click);
    document.addEventListener("touchstart", this.onTouch);

    document.addEventListener("mouseup", this.release);
    document.addEventListener("mousemove", this.onDrag);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.click);
    document.removeEventListener("touchstart", this.onTouch);
    document.removeEventListener("mouseup", this.release);
    document.removeEventListener("mousemove", this.onDrag);
  }



  render() {
    const props = this.props;

    const cx = cn.bind(style);

    return <div ref={node => this.gameContainer = node} className={style.container} >
      {
        props.users.map((user, id) => <div
          key={id}
          className={style.objectPos}
          style={{ top: user.y, left: user.x }}
        >
          <div
            className={cx({
              gameObject: true,
              player: user.id === props.currentUser.user.id
            })}

            style={{ background: `#${user.color}` || 'red' }}>
          </div>
          <div className={style.text}>
            {user.username} ID: {user.id}
          </div>

        </div>
        )
      }

    </div >
  }
}

export default GameField;