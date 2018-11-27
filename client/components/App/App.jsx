import React from "react";
import propTypes from "prop-types";

import {
  Header,
  LoginForm,
  Selector,
  GameField,
  Chat,
  Modal,
  NewMessage,
  RegistrationForm
} from "components";

import style from "./style";

class App extends React.Component {
  static propTypes = {
    currentUser: propTypes.shape({
      user: propTypes.object,
    }).isRequired,
    connectToServer: propTypes.func.isRequired,
    modal: propTypes.string
  };

  static defaultProps = {
    modal: ``
  };

  componentWillMount() {
    const { connectToServer } = this.props;

    connectToServer();
  }

  render() {
    const {
      currentUser: { user },
      modal
    } = this.props;

    return (
      <div className={style.app}>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.content}>
          {user ? (
            <React.Fragment>
              <div className={style.leftPanel}>
                <Chat />
              </div>
              <GameField />
            </React.Fragment>
          ) : (
            ``
          )}
        </div>
        <Selector name={modal}>
          <Modal name="loginform">
            <LoginForm />
          </Modal>
          <Modal name="showmessage">
            <NewMessage />
          </Modal>
          <Modal name="regform">
            <RegistrationForm />
          </Modal>
        </Selector>
      </div>
    );
  }
}

export default App;
