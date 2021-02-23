import React from "react";
import Matchboard from "./index";

import {
  OneMapMatch,
  TwoMapMatch,
  ThreeMapMatch,
  FourMapMatch,
  FiveMapMatch,
} from "./mockData";

const Template = (args) => <Matchboard {...args} />;

export default {
  component: Matchboard,
  title: "ScoreBoard",
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

export { ThreeMap, FiveMap, OneMap, TwoMap, FourMap };
