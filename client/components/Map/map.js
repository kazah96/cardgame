export const getTile = (number) => {
  const h = ff.tileheight;
  const w = ff.tilewidth;


  const y = Math.floor(number / (ff.columns)) * ff.tileheight;
  const x = (number % (ff.columns)) * ff.tilewidth;

  return { x, y, w, h }
}

export const drawLayer = ({ layer, context, img }) => {
  layer.data.map((item, key) => {
    const tile = this.getTile(item - 1);
    const y = Math.floor(key / layer.width);
    const x = key % layer.height;
    context.drawImage(img, tile.x, tile.y, tile.w, tile.h,
      x * ff.tilewidth, y * ff.tileheight, ff.tilewidth, ff.tilewidth
    );
  });
}

export const drawMap = (canvas, map) => {
  const context = canvas.getContext('2d');
  const img = new Image();
  const map = this.props.map;

  img.src = image;
  img.onload = () => {
    map.layers.map(layer => this.drawLayer({ layer, context, img }));
  };

}