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

export default function ObjectFactory({ objectName, overrideParams }) {
  const config = requireConfig();

  if (
    !Object.prototype.hasOwnProperty.call(config, objectName) ||
    typeof config[objectName] !== "object"
  )
    throw new Error(`Required gameobj ${objectName} doesnt have an entry in config`);

  // перезаписываем параметры, если есть такие
  const properties = _.merge({ ...config[objectName] }, { ...overrideParams });

  const generatorArray = Object.keys(properties)
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
