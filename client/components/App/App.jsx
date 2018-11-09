import style from './style';
import React from 'react';
import { Header, Input, LoginForm, Selector, GameField, Chat, NewMessage, RegistrationForm} from 'components';
import Modal from '../Modal';


class App extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.connectToServer();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.array !== this.props.array)
    {
      if(nextProps.array.length !== this.props.array.length) 
        return false;
      
      return true;
    }

    console.log("App will re-render");

    return true;
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
        <Modal name="regform">
          <RegistrationForm />
        </Modal>
      </Selector>
    </div>
  }
}

export default App;