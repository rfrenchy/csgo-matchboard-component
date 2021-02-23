import React from "react";
import TeamSection from "./index";
import LiquidLogo from "../../assets/teams/liquid.svg";

const Template = (args) => <TeamSection {...args} />;

export default {
  component: TeamSection,
  title: "TeamSection",
};

export const Team = Template.bind({});

Team.args = {
  imageSrc: LiquidLogo,
  mapPick: true,
  rounds: "12",
};

export const Default = Template.bind({});

Default.args = {
  imageSrc: "",
  mapPick: false,
  rounds: "",
};
