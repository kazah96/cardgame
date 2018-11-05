import style from './style.css';
import React from 'react';
import { Header, Input, LoginForm, Selector } from '../index';
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
      <div>
        Users online: { props.usersOnline }
      </div>

      <Selector name={props.modal}>
        <Modal name="loginform">
          <LoginForm />
        </Modal>
      </Selector>
    </div>
  }
}

export default App;