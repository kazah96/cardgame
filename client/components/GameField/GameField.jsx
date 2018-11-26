import style from './style';
import React, { Component } from 'react';
import cn from "classnames/bind";
import GameObject from "components/GameObject";
import Map from "components/Map";

class GameField extends Component {
  constructor() {
    super();
    this.state = {
      x: 50,
      y: 50,
    }
  }

  render() {
    const props = this.props;
    const cx = cn.bind(style);
    return <div ref={node => this.gameContainer = node} className={style.container} >
      
      <Map mapname="small" />

      {props.users.map((user, id) => <GameObject key={id} id={id} />)}

     
    </div >

  }
}

export default GameField;