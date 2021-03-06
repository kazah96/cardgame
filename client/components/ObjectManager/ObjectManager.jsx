import React from "react";
import PropTypes from "prop-types";
import GenerateObject from "components/ObjectGenerator";

export default class ObjectManager extends React.Component {
  static propTypes = {
    objects: PropTypes.object.isRequired, // eslint-disable-line
  };

  shouldComponentUpdate = prevProps => {
    const { objects } = this.props;

    if (Object.keys(prevProps.objects).length !== Object.keys(objects).length) {
      return true;
    }
    return false;
  };

  render() {
    const { objects } = this.props;
    return (
      <React.Fragment>
        {Object.keys(objects).map(objectId => {
          const GeneratedObject = GenerateObject({
            objectName: objects[objectId].type,
          });
          return <GeneratedObject key={objectId} id={objectId} />;
        })}
      </React.Fragment>
    );
  }
}
