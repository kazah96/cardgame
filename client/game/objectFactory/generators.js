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

  const objGenerator = props => ({
    x: props.x,
    y: props.y,
  });

  return new BaseGenerator({
    priority,
    componentWrapperGenerator,
    objGenerator,
  });
}

export function imaged() {
  const priority = 5;
  const componentWrapperGenerator = () => Imaged;

  const objGenerator = props => ({});

  return new BaseGenerator({
    priority,
    componentWrapperGenerator,
    objGenerator,
  });
}

export function inputhandler() {
  const priority = 20;
  const componentWrapperGenerator = () => InputHandler;

  const objGenerator = props => ({});

  return new BaseGenerator({
    priority,
    componentWrapperGenerator,
    objGenerator,
  });
}

export function moving() {
  const priority = 15;
  const componentWrapperGenerator = () => Moving;

  const objGenerator = props => ({});

  const schemaMatcher = props => {
    debugger;
    if (!(typeof props.speed === "number")) return false;
  };

  return new BaseGenerator({
    priority,
    componentWrapperGenerator,
    objGenerator,
    schemaMatcher,
  });
}

export function aiDriven() {
  const priority = 15;
  const componentWrapperGenerator = () => AiDriven;

  const objGenerator = props => ({});

  return new BaseGenerator({
    priority,
    componentWrapperGenerator,
    objGenerator,
  });
}
