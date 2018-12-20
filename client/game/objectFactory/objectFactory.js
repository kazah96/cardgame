import _ from "lodash";

import requireConfig from "./requireConfig";

function checkValidName(name) {
  if (typeof name !== "string") {
    throw new Error("Name should be a string");
  }

  if (name.length <= 0) {
    throw new Error("Name should empty");
  }

  return true;
}

function bbException() {
  this.message = "Паваыпавп";
  this.toString = function() {
    return this.message;
  };
}

function nodeGenerator(
  props,
  { priority, matchSchema, objGenerator, componentWrapperGenerator },
) {
  const newPriority = typeof priority !== "number" ? priority : 0;

  // Пропуск объектов по умолчанию
  let getObject = obj => obj;
  let getComponent = obj => obj;

  // Если параметр отключен - просто пропускаем
  if (props !== false) {
    if (typeof objGenerator !== "function")
      throw new Error("Object generator should be a function");
    if (typeof componentGenerator !== "function")
      throw new Error("Component generator should be a function");

    // destruct потому что merge мутирует объект
    getObject = previousObject =>
      _.merge({ ...previousObject }, objGenerator(props));
    getComponent = previousComponent =>
      componentWrapperGenerator(props)(previousComponent);
  }

  this.priority = newPriority;
  this.getObject = getObject;
  this.getComponent = getComponent;
}

export default function generate({ objectName, overrideParams }) {
  const config = requireConfig();

  if (
    !Object.prototype.hasOwnProperty.call(config, objectName) ||
    typeof config[objectName] !== "object"
  )
    throw new Error("Required gameobj is not an object");

  const properties = config[objectName];

  //const assemblied = assembly(properties);

  Object.keys(properties).map(property => {});

  return {};
}
