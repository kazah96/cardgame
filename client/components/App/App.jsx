import style from './style.css';
import React, { Component } from 'react';
import { Header, Input, GameObject } from '../index';
import SnakeGame from '../SnakeGame/SnakeGame.jsx';
import Selector from '../Selector';
import Modal from '../Modal';

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
    <Selector name={props.modal}>
        <Modal name="ebala">
            <div>asdasd</div>
        </Modal>
        <Modal name="unauthorized">
            <div>UNAUTHORIZEEEEDDDDDDD</div>
        </Modal>
    </Selector>



</div>

export default App;