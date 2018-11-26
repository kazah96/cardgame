import style from './style';
import PropTypes from "prop-types";
import React, { PureComponent } from 'react';
import ff from "../../assets/tiles";

class Map extends PureComponent {
  static propTypes = {
    map: PropTypes.object,
  };
  constructor(a) {
    super(a);

    this.state = {};
  }

  getTileSet = ({ number }) => {
    const { tilesets } = this.props.map;

    for (let index = 0; index < tilesets.length; index++) {
      const element = tilesets[index];

      if ((!tilesets[index + 1]) || number < tilesets[index + 1].firstgid) return element;

    }
  }

  getTile = ({ number }) => {
    const tileset = this.getTileSet({ number });

    const images = this.state.loadedImages;

    const img = this.state.loadedImages[tileset.name];

    const num = number - tileset.firstgid;

    const h = tileset.tileheight;
    const w = tileset.tilewidth;
    const y = Math.floor(num / (tileset.columns)) * tileset.tileheight;
    const x = (num % (tileset.columns)) * tileset.tilewidth;

    return { img, x, y, w, h }
  }

  drawLayer = ({ layer, context }) => {
    layer.data.map((item, key) => {
      const tile = this.getTile({ number: item });
      const y = Math.floor(key / layer.width);
      const x = key % layer.height;
      context.drawImage(tile.img, tile.x, tile.y, tile.w, tile.h,
        x * ff.tilewidth, y * ff.tileheight, ff.tilewidth, ff.tilewidth
      );
    });
  }

  loadAllImages = (tilesets) => {
    return new Promise((accept, reject) => {
      const numImages = tilesets.length;
      let loadedImages = 0;

      const images = tilesets
        .reduce((accum, item) => {
          const img = new Image();
          img.src = `assets/images/${item.image}`;
          img.onload = () => {
            loadedImages += 1;
            if (loadedImages >= numImages) {
              this.setState({ loadedImages: images });
              accept(images);
            }
          }
          return { ...accum, [item.name]: img }
        }, {});
    });
  }

  drawMap = () => {
    const context = this.canvas.getContext('2d');
    const map = this.props.map;

    map.layers.map(layer =>
      this.drawLayer({ layer, context })
    );
  }

  componentDidUpdate() {
    if (this.state.loadedImages === undefined) {
      this.loadAllImages(this.props.map.tilesets);
    }
    else
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
      {map && <React.Fragment>
        <canvas height={height} width={width} ref={node => this.canvas = node} />
      </React.Fragment>
      }
    </div>
  }
}


export default Map;