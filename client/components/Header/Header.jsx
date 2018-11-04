import style from './style.css';
import React, { Component } from 'react';

const Header = (props) => <div className={style.header}>
  {
    props.user ? <React.Fragment>
      <div className={style.name}>
        {props.user.name}
      </div>
      <div className={style.exitButton}>
        Выйти
        </div>
    </React.Fragment>
      :
      <React.Fragment>
        <div className={style.loginButton}>
          Войти
        </div>
      </React.Fragment>
  }

</div>

export default Header;