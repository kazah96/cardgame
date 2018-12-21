export default {
  bullet: {
    collidable: true,
    ranged: false,
  },
  fff: {
    moving: {
      priority: 0,
      speed: 4,
    },
  },
  basePlayer: {
    inherit: "fff",
    object: {
      x: 500,
      y: 500,
      height: 42,
      width: 42,
    },
    clamped: { range: 500 },
    imaged: { hue: 23 },
  },
  player: {
    inherit: "basePlayer",
    inputhandler: true,
  },
  ai: {
    inherit: "player",
    moving: {
      priority: 0,
      speed: 2,
    },
    imaged: { hue: 1200 },
    inputhandler: false,
    aiDriven: true,
  },
};
