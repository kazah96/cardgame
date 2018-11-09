import React, { Component } from 'react';
import style from './style';

const NewMessage = React.memo(props =>
    <div className={style.container}>
        <div className={style.header}>У вас сообщение</div>
        <div className={style.message}>"{props.message}"</div>
        <div className={style.footer}>от <span className={style.sender}>
           {props.sender}</span> {props.date}</div>
    </div>
);

export default NewMessage;