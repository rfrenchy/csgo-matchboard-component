import "jest-enzyme";
import "jest-styled-components";

import React from "react";
import { mount } from "../enzyme";
import Matchboard from "../src/components/MatchBoard";
import { TwoMapMatch } from "../src/components/Matchboard/mockData";

describe("<Matchboard/>", () => {
  it("contains 2 team sections", () => {
    expect(mount(<Matchboard match={TwoMapMatch} />)).toExist();
  });
});
