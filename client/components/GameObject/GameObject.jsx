import style from './style';
import React, { Component } from 'react';
import cn from "classnames/bind";
import PropTypes from "prop-types"

class GameObject extends Component {
  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    isPlayer: PropTypes.bool,
    color: PropTypes.string,
    id: PropTypes.number,
  }

  componentWillUpdate() {
    console.log("GameObj will update")
  }

  componentWillMount() {
    if (this.props.isPlayer)
      document.addEventListener("keypress", this.keyPress);
  }
  componentWillUnmount() {
    if (this.props.isPlayer)
      document.removeEventListener("keypress", this.keyPress);
  }

  keyPress = (event) => {
    console.log("this props");
    console.log(this.props);
    switch (event.key) {
      case "ArrowLeft":
        this.props.changePosition({ x: this.props.x - 5, y: this.props.y })
        return;
      default:
        return;
    }
  }



  render() {
    const props = this.props;

    console.log(props);
    const cx = cn.bind(style);
    return <div
      className={style.objectPos}
      style={{ top: props.y, left: props.x }}
    >
      <div
        className={cx({
          gameObject: true,
          player: props.isPlayer
        })}

        style={{ background: `#${props.color}` || 'red' }}>
      </div>
      <div className={style.text}>
        {props.id}
      </div>

    </div>
  }
}


export default GameObject;