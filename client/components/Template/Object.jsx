import style from './style.css';
import React, { Component } from 'react';

class Object extends Component {
  constructor() {
    super();
  }


  render() {
    const props = this.props;
    return <div className={style.container}></div>
  }
}

export default Object;