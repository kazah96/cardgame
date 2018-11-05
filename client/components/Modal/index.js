import React, { Component } from 'react';
import style from './style.css';

const Modal = React.memo(props =>
    <div className={style.background}>
        <div className={style.modal}>
            {props.children}
        </div>
    </div>

);

export default Modal;