/**
 * @typedef {Object} CliOption
 * @property {string} name display name
 * @property {string} package npm package name
 * @property {string} binName name of the executable file
 * @property {string} alias shortcut for choice
 * @property {boolean} installed currently installed?
 * @property {boolean} recommended is recommended
 * @property {string} url homepage
 * @property {string} description description
 */
export default {
  bullet: {
    collidable: true,
    ranged: false,
  },
  bayce: {
    object: {
      x: 500,
      y: 500,
    },
    clamped: { range: 500 },
    imaged: true,
    moving: {
      speed: 500,
    },
    inputhandler: true,
  },
};
