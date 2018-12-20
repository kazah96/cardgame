import Clamped from "components/GameObject/Clamped";

function clamped() {
  const priority = 10;
  const componentWrapperGenerator = props => {
    return Clamped;
  };

  const objGenerator = props => ({
    range: props.range,
  });

  return nodeGenerator(props, {
    priority,
    componentWrapperGenerator,
    objGenerator,
  });
}

