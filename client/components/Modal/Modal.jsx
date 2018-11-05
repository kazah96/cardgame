import React, { Component } from 'react';
import style from './style.css';

class Modal extends Component {
    constructor() {
        super();

    }

    click = (e) => {
        if (!this.element.contains(e.target))
        {
            console.log("on exit");
            this.props.onExit();
        }
    }

    componentDidMount(){
        console.log("mounete");
    }

    componentWillMount() {
        document.addEventListener("mousedown", this.click);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.click);
    }

    render() {
        return <div className={style.background}>
            <div ref={element => this.element = element} className={style.modal}>
                {this.props.children}
            </div>
        </div>
    }
}

export default Modal;