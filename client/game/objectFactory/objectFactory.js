import _ from "lodash";

import compose from "utils/pipe";

import requireConfig from "./requireConfig";
import requireGenerator from "./requireGenerator";

// function checkValidName(name) {
//   if (typeof name !== "string") {
//     throw new Error("Name should be a string");
//   }

//   if (name.length <= 0) {
//     throw new Error("Name should empty");
//   }

//   return true;
// }

const ignorePropertiesList = ["type", "inherit"];

function filterProperties(entry) {
  return _.omit(entry, [...ignorePropertiesList]);
}

function getEntry({ config, objectName }) {
  if (
    !Object.prototype.hasOwnProperty.call(config, objectName) ||
    typeof config[objectName] !== "object"
  )
    return undefined;

  const entry = config[objectName];
  let inheritEntry = {};

  if (typeof entry.inherit === "string") {
    inheritEntry = getEntry({ config, objectName: entry.inherit });
    if (!inheritEntry) throw new Error(`Cant find ${entry.inherit} to inherit`);
  }

  return _.merge({ ...inheritEntry }, { ...entry });
}

export default function ObjectFactory({ objectName, overrideParams }) {
  const config = requireConfig();
  const entry = getEntry({ config, objectName });

  if (!entry) throw new Error(`Cant find ${objectName} entry in config`);

  // перезаписываем параметры, если есть такие
  const properties = _.merge(
    { ...entry },
    { ...overrideParams },
  );

  // отбрасываем специальные свойства типа inherit, они не нужны для генераторов
  const filteredProperties = filterProperties(properties);
  const generatorArray = Object.keys(filteredProperties)
    .map(propertyName => {
      const generator = requireGenerator(propertyName);
      return generator.make(properties[propertyName]);
    })
    .sort((a, b) => {
      if (a.priority > b.priority) return 1;
      if (a.priority < b.priority) return -1;
      return 0;
    });

  this.getComponent = () =>
    compose(...generatorArray.map(item => item.getComponent))();

  this.getObject = () =>
    compose(...generatorArray.map(item => item.getObject))();
}
