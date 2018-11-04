import React, { Component } from 'react';

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
        return <input className={this.props.className}
            value={this.state.value}
            onChange={this.onChange}>
        </input>
    }

}

export default Input;