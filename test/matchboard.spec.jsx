import "jest-enzyme";
import "jest-styled-components";

import React from "react";
import { mount } from "../enzyme";
import Matchboard from "../src/components/MatchBoard";

describe("<Matchboard/>", () => {
  it("contains 2 team sections", () => {
    const wrapper = mount(<Matchboard />);

    // wrapper.tohave
  });
});
