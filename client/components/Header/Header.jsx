import React from "react";
import { Button } from "components";

import style from "./style";

const Header = React.memo(({ user, onRegister, onLogout, onLogin }) => (
  <div className={style.header}>
    {user ? (
      <React.Fragment>
        <div className={style.name}>{user.username}</div>

        <Button name="Выйти" onClick={onLogout} className={style.loginButton} />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Button name="Войти" onClick={onLogin} className={style.loginButton} />
        <Button
          name="Зарегистрироваться"
          onClick={onRegister}
          className={style.loginButton}
        />
      </React.Fragment>
    )}
  </div>
));

export default Header;
