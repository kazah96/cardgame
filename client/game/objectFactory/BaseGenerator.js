import _ from "lodash";

export default function BaseGenerator({
  priority,
  schemaMatcher,
  objGenerator,
  componentWrapperGenerator,
}) {
  const defaultPriority = 0;
  const defaultFunction = () => {};
  const defaultSchemaMatcher = () => true;

  const newSchemaMatcher =
    typeof schemaMatcher === "function" ? schemaMatcher : defaultSchemaMatcher;

  if (typeof objGenerator !== "function")
    throw new Error("Object generator should be a function");
  if (typeof componentWrapperGenerator !== "function")
    throw new Error("Component generator should be a function");

  this.make = props => {
    // Пропуск объектов по умолчанию
    let getObject = defaultFunction;
    let getComponent = defaultFunction;
    let newPriority = defaultPriority;

    // приоритет прописанный в генераторе
    if (typeof priority === "number") newPriority = priority;

    if (!newSchemaMatcher(props)) {
      throw new Error(`Prop "${props}" dont match schema`);
    }

    if (props !== false) {
      // приоритет прописанный в конфиге
      if (typeof props.priority === "number") newPriority = props.priority;

      // destruct потому что merge мутирует объект
      getObject = previousObject =>
        _.merge({ ...previousObject }, objGenerator(props));

      getComponent = previousComponent =>
        componentWrapperGenerator(props)(previousComponent);
    }

    return { priority: newPriority, getComponent, getObject };
  };
}
