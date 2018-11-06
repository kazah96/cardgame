import style from './style.css';
import React, { Component } from 'react';
import { Button } from '..';

const Header = (props) => <div className={style.header}>
  {
    props.user ? <React.Fragment>
      <div className={style.name}>
        {props.user.username}
      </div>

      <Button name="Выйти" onClick={props.onLogout} className={style.loginButton } />

    </React.Fragment>
    :
      <React.Fragment>
          <Button name="Войти" onClick={props.onLogin} className={style.loginButton} />
          <Button name="Зарегистрироваться" onClick={props.onRegister} className={style.loginButton} />

  </React.Fragment>
  }

</div>

export default Header;