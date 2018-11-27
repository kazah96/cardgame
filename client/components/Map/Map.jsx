import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import style from "./style";

class Map extends PureComponent {
  static propTypes = {
    map: PropTypes.shape({
      tilesets: PropTypes.array,
    }),
    mapname: PropTypes.string.isRequired,
    getMap: PropTypes.func.isRequired,
  };

  static defaultProps = {
    map: undefined,
  };

  constructor(a) {
    super(a);

    this.state = {
      loadedImages: undefined,
    };
  }

  componentDidMount() {
    const { map, mapname, getMap } = this.props;

    if (map === undefined) getMap(mapname);
  }

  componentDidUpdate() {
    const { loadedImages } = this.state;
    const { map } = this.props;

    if (loadedImages === undefined) {
      this.loadAllImages(map.tilesets);
    } else this.drawMap();
  }

  getTileSet = ({ number }) => {
    const {
      map: { tilesets },
    } = this.props;

    for (let index = 0; index < tilesets.length; index += 1) {
      if (!tilesets[index + 1] || number < tilesets[index + 1].firstgid)
        return tilesets[index];
    }

    return tilesets[0];
  };

  getTile = ({ number }) => {
    const { loadedImages } = this.state;

    const tileset = this.getTileSet({ number });
    const img = loadedImages[tileset.name];
    const num = number - tileset.firstgid;
    const h = tileset.tileheight;
    const w = tileset.tilewidth;
    const y = Math.floor(num / tileset.columns) * tileset.tileheight;
    const x = (num % tileset.columns) * tileset.tilewidth;

    return { img, x, y, w, h };
  };

  drawLayer = ({ layer, context }) => {
    layer.data.forEach((item, key) => {
      const tile = this.getTile({ number: item });
      const y = Math.floor(key / layer.width);
      const x = key % layer.height;
      context.drawImage(
        tile.img,
        tile.x,
        tile.y,
        tile.w,
        tile.h,
        x * tile.w,
        y * tile.h,
        tile.w,
        tile.h,
      );
    });
  };

  loadAllImages = tilesets =>
    new Promise(accept => {
      const numImages = tilesets.length;
      let loadedImages = 0;

      const images = tilesets.reduce((accum, item) => {
        const img = new Image();
        img.src = `assets/images/${item.image}`;

        img.onload = () => {
          loadedImages += 1;
          if (loadedImages >= numImages) {
            this.setState({ loadedImages: images });
            accept(images);
          }
        };
        return { ...accum, [item.name]: img };
      }, {});
    });

  drawMap = () => {
    const context = this.canvas.getContext(`2d`);
    const { map } = this.props;

    map.layers.map(layer => this.drawLayer({ layer, context }));
  };

  render() {
    const { map } = this.props;
    const height = map ? map.height * map.tileheight : 0;
    const width = map ? map.width * map.tilewidth : 0;

    return (
      <div className={style.container}>
        {map && (
          <React.Fragment>
            <canvas
              height={height}
              width={width}
              ref={node => {
                this.canvas = node;
              }}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Map;
