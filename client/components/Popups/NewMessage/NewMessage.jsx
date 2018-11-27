import React from "react";
import style from "./style";

const NewMessage = React.memo(({ message, sender, date }) => (
  <div className={style.container}>
    <div className={style.header}>У вас сообщение</div>
    <div className={style.message}>{`"${message}"`}</div>
    <div className={style.footer}>
      {`от`}
      <span className={style.sender}>{sender}</span>
      {date}
    </div>
  </div>
));

export default NewMessage;
