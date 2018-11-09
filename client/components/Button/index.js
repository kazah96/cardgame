import React, { Component } from 'react';
import style from "./style";
import cn from 'classnames/bind';



const Button = (props) => {
  const cx = cn.bind({...style, ss: props.className});

  return <div
    className={cx({submit: true, ss: true})}
    onClick={props.onClick}
  >
    {props.name}
  </div>
}

export default Button;
