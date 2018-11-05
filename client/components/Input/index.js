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
            onChange={event => this.onChange(event)}
            placeholder={this.props.placeholder}
        >
        </input>
    }

}

export default Input;