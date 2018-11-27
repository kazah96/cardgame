import React, { PureComponent } from "react";
import propTypes from "prop-types";

import { Input } from "components";

import style from "./style";

class RegistrationForm extends PureComponent {
  static propTypes = {
    onClick: propTypes.func,
  };

  static defaultProps = {
    onClick: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      username: ``,
      password: ``,
      year: ``,
    };
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick({ ...this.state });
  };

  render() {
    return (
      <div className={style.container}>
        <Input
          className={style.input}
          onChange={value => this.setState({ username: value })}
          placeholder="name"
        />
        <Input
          className={style.input}
          onChange={value => this.setState({ password: value })}
          placeholder="password"
        />
        <Input
          className={style.input}
          onChange={value => this.setState({ year: value })}
          placeholder="year"
        />

        <button
          type="button"
          className={style.submit}
          onClick={this.handleClick}
        >
          {`SUBMIT`}
        </button>
      </div>
    );
  }
}

export default RegistrationForm;
