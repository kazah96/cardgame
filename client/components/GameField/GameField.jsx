import style from './style';
import React, { Component } from 'react';
import cn from "classnames/bind";
import GameObject from "components/GameObject";

class GameField extends Component {
  constructor() {
    super();
  }

  click = (event) => {
    if (this.gameContainer.contains(event.target)) {
      var bounds = this.gameContainer.getBoundingClientRect();
      var x = event.clientX - bounds.left;
      var y = event.clientY - bounds.top;
      this.props.changePosition({ x: x - 20, y: y - 20 })
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



  componentWillUpdate() {
    console.log("Field will update")
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.users !== this.props.users)
    {
      if(nextProps.users.length === this.props.users.length) 
        return false;
      
      return true;
    }

    console.log("App will re-render");

    return true;
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
      {props.users.map((user, id) => <GameObject key={id} id={id} />)}
    </div >

  }
}

export default GameField;