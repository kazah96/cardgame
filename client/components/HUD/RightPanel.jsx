import React from "react";
import PropTypes from "prop-types";
import style from "./style";

export default class RightPanel extends React.PureComponent {
  static propTypes = {
    onSpawn: PropTypes.func,
  };

  static defaultProps = {
    onSpawn: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedItem: undefined,
    };
  }

  handleOptionChange = e => {
    this.setState({ selectedItem: e.target.value });
  };

  onClick = () => {
    const { selectedItem, hue, speed, range } = this.state;
    const { onSpawn } = this.props;

    onSpawn({ type: selectedItem, hue, speed, range });
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { selectedItem, hue, speed, range } = this.state;
    return (
      <div className={style.rightPanel}>
        <form>
          <p>
            <b>Тип</b>
          </p>
          <p>
            <input
              name="type"
              type="radio"
              value="ai"
              onChange={this.handleOptionChange}
              checked={selectedItem === `ai`}
            />
            AI
            <input
              name="type"
              type="radio"
              value="player"
              onChange={this.handleOptionChange}
              checked={selectedItem === `player`}
            />
            PLAYER
          </p>
          <p>Hue rotate</p>
          <input
            type="hue"
            name="hue"
            value={hue}
            onChange={this.handleInputChange}
          />
          <p>Speed</p>
          <input
            type="number"
            name="speed"
            value={speed}
            onChange={this.handleInputChange}
          />
          <p>Range</p>
          <input
            type="number"
            name="range"
            value={range}
            onChange={this.handleInputChange}
          />
        </form>

        <button type="button" onClick={this.onClick}>
          SPAWN
        </button>
      </div>
    );
  }
}
