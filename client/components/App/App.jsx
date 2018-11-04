import style from './style.css';
import React, { Component } from 'react';
import { Header, Input, GameObject } from '../index';
import SnakeGame from '../SnakeGame/SnakeGame.jsx';

const user = { name: "poqer" };

const state = {
    value: ''
}

const App = (props) => <div className={style.app}>
    <div className={style.header}>
        <Header user={user}></Header>
        <div onClick={props.onClick} className={style.connectBtn}> патключица</div>
        <Input onChange={o => state.value = o} />

        <div onClick={() => props.sendMessage(state.value)}>SendMsg</div>
    </div>
    <SnakeGame />


</div>

export default App;