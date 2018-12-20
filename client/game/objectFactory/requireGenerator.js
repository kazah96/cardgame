import BaseGenerator from "./BaseGenerator";
import {
  clamped,
  object,
  imaged,
  inputhandler,
  moving,
  aiDriven,
} from "./generators";

const generatorList = {
  clamped,
  object,
  imaged,
  inputhandler,
  moving,
  aiDriven,
};

export default function requireGenerator(propertyName) {
  const generator = generatorList[propertyName];
  if (typeof generator !== "function") {
    throw new Error(`${propertyName} generator couldnot be found in list`);
  }

  const gen = generator();
  if (!(gen instanceof BaseGenerator)) {
    throw new Error(
      `${propertyName} generator is not instance of BaseGenerator`,
    );
  }

  return gen;
}
