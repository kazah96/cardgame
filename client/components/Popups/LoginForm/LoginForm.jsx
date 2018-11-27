import React, { PureComponent } from "react";
import propTypes from "prop-types";
import Input from "components/Input";
import { Button } from "components/index";

import style from "./style";

class LoginForm extends PureComponent {
  static propTypes = {
    onClick: propTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: ``,
      password: ``,
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
          placeholder="Имя"
        />
        <Input
          className={style.input}
          onChange={value => this.setState({ password: value })}
          placeholder="Пароль"
        />
        <Button
          className={style.button}
          name="Войcdти"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default LoginForm;
