import style from './style';
import React, { Component } from 'react';
import cn from "classnames/bind";
import PropTypes from "prop-types"

class GameObject extends Component {
  constructor() {
    super();
    this.state = { moving: 0, sprint: false }
  }

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
    if (this.props.isPlayer) {
      document.addEventListener("keydown", this.keyPress);
      document.addEventListener("keyup", this.keyUp);
    }
  }

  componentWillUnmount() {
    if (this.props.isPlayer)
      document.removeEventListener("keydown", this.keyPress);
  }

  keyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight")
      this.setState({ moving: 0 });
    if (event.key === "Shift")
      this.setState({ sprint: false });
  }

  keyPress = (event) => {

    switch (event.key) {
      case "ArrowLeft":
        if (this.state.moving !== 2) {
          this.setState({ moving: 2 });
        }
        return;
      case "ArrowRight":
        if (this.state.moving !== 1) {
          this.setState({ moving: 1 });
        }
        return;
      case "Shift":
        this.setState({ sprint: true });
        return;
      default:
        return;
    }
  }

  getAnimation() {
    const animations = {
      "walking_forwards": "walking",
      "walking_backwards": "walking_back",
      "sprint_forwards": "sprint_forwards",
      "sprint_backwards": "sprint_backwards",
    }
    console.log(this.state);
    let animName = "";
    if(this.state.moving === 0) return;

   animName += this.state.sprint ? "sprint" : "walking";
   animName+="_";
   animName += this.state.moving === 1 ? "forwards" : "backwards";

    return animations[animName];
  }


  render() {
    const props = this.props;

    const cx = cn.bind(style);
    return <div

      className={style.objectPos}
      style={{ top: props.y, left: props.x }}
    >
      <div
        className={cx({
          gameObject: true,
          [this.getAnimation()]: true,
          player: props.isPlayer
        })}

      // style={{ background: `#${props.color}` || 'red' }}
      >
      </div>
      <div className={style.text}>
        {props.id}
      </div>

    </div>
  }
}


export default GameObject;