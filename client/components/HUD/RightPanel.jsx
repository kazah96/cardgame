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
    const item = this.state.selectedItem;
    this.props.onSpawn({ type: this.state.selectedItem });
  };

  render() {
    const { onSpawn } = this.props;
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
              checked={this.state.selectedItem === "ai"}
            />
            AI
            <input
              name="type"
              type="radio"
              value="player"
              onChange={this.handleOptionChange}
              checked={this.state.selectedItem === "player"}
            />
            PLAYER
          </p>
        </form>

        <button type="button" onClick={this.onClick}>
          SPAWN
        </button>
      </div>
    );
  }
}
