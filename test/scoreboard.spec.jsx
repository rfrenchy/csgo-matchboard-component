import "jest-enzyme";
import "jest-styled-components";

import React from "react";
import { mount } from "../enzyme";
import ScoreBoard from "../src/components/Scoreboard";

describe("<Scoreboard/>", () => {
  it("contains 2 team sections", () => {
    const wrapper = mount(<ScoreBoard />);

    // wrapper.tohave
  });
});
