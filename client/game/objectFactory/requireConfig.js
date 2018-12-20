import gameObjects from "config/gameObjects";

export default function requireObject() {
  if (!(typeof gameObjects === "object")) {
    throw new Error("Config must be an object");
  }

  return gameObjects;
}
