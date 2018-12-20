import { shallow } from "enzyme";
import React from "react";

import Clamped from "../index";

const Element = Clamped();

it(`should handle state changes`, () => {
  const wrapper = shallow(<Element />);
});
