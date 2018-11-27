import React from "react";
import { Map } from "components";

import style from "./style";

const GameField = React.memo(() => (
  <div className={style.container}>
    <Map mapname="small" />
  </div>
));

export default GameField;
