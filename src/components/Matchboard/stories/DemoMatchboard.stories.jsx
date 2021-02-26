import React from "react";
import Matchboard from "./index";

import {
  OneMapMatch,
  TwoMapMatch,
  ThreeMapMatch,
  FourMapMatch,
  FiveMapMatch,
} from "./mockData";

export default {
  component: Matchboard,
  title: "Demo Matchboard",
};

const Template = (args) => {
  return <Matchboard {...args} />;
};

const OneMap = Template.bind({});

OneMap.args = {
  match: OneMapMatch,
};

const TwoMap = Template.bind({});

TwoMap.args = {
  match: TwoMapMatch,
};

const ThreeMap = Template.bind({});

ThreeMap.args = {
  match: ThreeMapMatch,
};

const FourMap = Template.bind({});

FourMap.args = {
  match: FourMapMatch,
};

const FiveMap = Template.bind({});

FiveMap.args = {
  match: FiveMapMatch,
};

export { OneMap, TwoMap, ThreeMap, FourMap, FiveMap };
