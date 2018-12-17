import React from "react";
import { HUD, Map, ObjectManager } from "components";
import EventEmitter from "eventemitter3";
import AppContext from "store/contextProvider";
import gameConfig from "consts/gameConfig";

import style from "./style";

const emitter = new EventEmitter();

class GameField extends React.PureComponent {
  componentDidMount() {
    this.init();
  }

  init = () => {
    setInterval(() => {
      emitter.emit(`tick`);
    }, 1000);
  };

  onClick = event => {
    emitter.emit(`mouseClick`, { x: event.clientX, y: event.clientY });
  };

  onClick = event => {
    if (this.gameContainer.contains(event.target)) {
      const bounds = this.gameContainer.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      emitter.emit(`mouseClick`, { x: x - 20, y: y - 20 });
    }
  };

  render() {
    return (
      <AppContext.Provider value={{ emitter }}>
        <div
          ref={node => {
            this.gameContainer = node;
          }}
          onClick={this.onClick}
          className={style.container}
        >
          <Map mapname={gameConfig.mapname} />
          <ObjectManager />
        </div>
        <HUD />
      </AppContext.Provider>
    );
  }
}

export default GameField;
