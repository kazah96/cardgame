import React, { Component } from 'react';
import cn from 'classnames/bind';
import style from './style.css';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }

    }

    onChange = (event) => {
        const value = event.target.value;
        this.setState({ value }, () =>
            this.props.onChange(value)
        );
    }

    render() {
        const ss = this.props.className;
        const cx = cn.bind({...style, ss});
        return <input className={cx({ input: true, ss: true })}
            value={this.state.value}
            onChange={event => this.onChange(event)}
            placeholder={this.props.placeholder}
        >
        </input>
    }

}

export default Input;