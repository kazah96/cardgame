import style from './style.css';
import React from 'react';
import { Header, Input, LoginForm, Selector, GameField, Chat, NewMessage } from '../index';
import Modal from '../Modal';

class App extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.connectToServer()
  }

  render() {
    const props = this.props;

    return <div className={style.app}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.content}>
        {this.props.currentUser.user ?
          <React.Fragment>
            <div className={style.leftPanel}>
              <Chat />

            </div>

          <GameField />

          </React.Fragment>

          : ""}
      </div>

      <Selector name={props.modal}>
        <Modal name="loginform">
          <LoginForm />
        </Modal>
        <Modal name="showmessage">
          <NewMessage />
        </Modal>
      </Selector>
    </div>
  }
}

export default App;