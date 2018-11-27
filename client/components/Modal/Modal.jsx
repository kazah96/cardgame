import React, { Component } from "react";
import propTypes from "prop-types";

import style from "./style";

class Modal extends Component {
  static propTypes = {
    children: propTypes.node,
    onExit: propTypes.func,
  };

  static defaultProps = {
    onExit: () => {},
    children: null,
  };

  componentWillMount() {
    document.addEventListener(`mousedown`, this.click);
  }

  componentWillUnmount() {
    document.removeEventListener(`mousedown`, this.click);
  }

  click = event => {
    const { onExit } = this.props;

    if (!this.element.contains(event.target)) {
      onExit();
    }
  };

  render() {
    const { children } = this.props;

    return (
      <div className={style.background}>
        <div
          ref={ref => {
            this.element = ref;
          }}
          className={style.modal}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
