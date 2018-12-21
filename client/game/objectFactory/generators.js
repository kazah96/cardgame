import * as yup from "yup";

import Clamped from "components/GameObject/Clamped";
import Imaged from "components/GameObject/Imaged";
import InputHandler from "components/GameObject/InputHandler";
import Moving from "components/GameObject/MovingObject";
import AiDriven from "components/GameObject/AiHandler";

import { WrappedComponent } from "components/GameObject";

import BaseGenerator from "./BaseGenerator";

export function clamped() {
  const priority = 10;
  const componentWrapperGenerator = () => Clamped;

  const objGenerator = props => ({
    range: props.range,
  });

  return new BaseGenerator({
    priority,
    componentWrapperGenerator,
    objGenerator,
  });
}

export function object() {
  const priority = 0;
  const componentWrapperGenerator = () => WrappedComponent;
  const schema = yup.object().shape({
    x: yup.number(),
    y: yup.number(),
    width: yup.number(),
    height: yup.number(),
  });

  const objGenerator = props => ({
    x: props.x,
    y: props.y,
    width: props.width,
    height: props.height,
  });

  return new BaseGenerator({
    priority,
    componentWrapperGenerator,
    objGenerator,
    schema,
  });
}

export function imaged() {
  const priority = 5;
  const componentWrapperGenerator = () => Imaged;

  const objGenerator = props => ({
    hue: props.hue,
  });

  return new BaseGenerator({
    priority,
    componentWrapperGenerator,
    objGenerator,
  });
}

export function inputhandler() {
  const priority = 20;
  const componentWrapperGenerator = () => InputHandler;

  const objGenerator = () => ({});

  return new BaseGenerator({
    priority,
    componentWrapperGenerator,
    objGenerator,
  });
}

export function moving() {
  return new BaseGenerator({
    priority: 15,
    componentWrapperGenerator: () => Moving,
    objGenerator: props => ({ speed: props.speed }),
    schema: yup.object().shape({
      speed: yup
        .number()
        .min(0)
        .max(1000),
    }),
  });
}

export function aiDriven() {
  const priority = 15;
  const componentWrapperGenerator = () => AiDriven;

  const objGenerator = () => ({});

  return new BaseGenerator({
    priority,
    componentWrapperGenerator,
    objGenerator,
  });
}
