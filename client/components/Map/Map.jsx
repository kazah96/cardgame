import style from './style';
import PropTypes from "prop-types";
import React, { PureComponent } from 'react';
import ff from "../../assets/tiles";
import image from "../../assets/tiles2.jpg";

class Map extends PureComponent {
  static propTypes = {
    map: PropTypes.object,
  };

  getTile = (number) => {
    const h = ff.tileheight;
    const w = ff.tilewidth;
    const y = Math.floor(number / (ff.columns)) * ff.tileheight;
    const x = (number % (ff.columns)) * ff.tilewidth;

    return { x, y, w, h }
  }

  drawLayer = ({ layer, context, img }) => {
    layer.data.map((item, key) => {
      const tile = this.getTile(item - 1);
      const y = Math.floor(key / layer.width);
      const x = key % layer.height;
      context.drawImage(img, tile.x, tile.y, tile.w, tile.h,
        x * ff.tilewidth, y * ff.tileheight, ff.tilewidth, ff.tilewidth
      );
    });
  }

  drawMap = () => {
    const context = this.canvas.getContext('2d');

    const img = new Image();
    img.src = image;

    const map = this.props.map;

    img.onload = () => {
      map.layers.map(layer => this.drawLayer({ layer, context, img }));
    };

  }

  componentDidUpdate() {
    this.drawMap();
  }

  componentDidMount() {
    if (this.props.map === undefined)
      this.props.getMap(this.props.mapname);
  }

  render() {
    const map = this.props.map;
    const height = map ? map.height * map.tileheight : 0;
    const width = map ? map.width * map.tilewidth : 0;
    return <div className={style.container}>
      <div onClick={w => { this.props.getMap(this.props.mapname); }} >
        LoadMap
        </div>
      {map && <React.Fragment>
        <canvas height={height} width={width} ref={node => this.canvas = node} />
      </React.Fragment>
      }
    </div>
  }
}


export default Map;