import React, { Component } from 'react';

const Selector = React.memo(props =>
  <div>
    {React.Children
      .map(props.children, (child) => child)
      .find(w => w.props.name === props.name)}
  </div>
);

export default Selector;