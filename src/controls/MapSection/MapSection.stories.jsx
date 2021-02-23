import React from "react";
import MapSection from "./index";

import LiquidLogo from "../../assets/teams/liquid.svg";
import FazeLogo from "../../assets/teams/faze.svg";
import MirageImage from "../../assets/maps/mirage.jpg";

const Template = (args) => <MapSection {...args} />;

export default {
  component: MapSection,
  title: "MapSection",
};

const Default = Template.bind({});

Default.args = {
  map: "Mirage",
  teamOne: {
    mapPick: true,
    imageSrc: LiquidLogo,
    rounds: 12,
  },
  teamTwo: {
    mapPick: false,
    imageSrc: FazeLogo,
    rounds: 16,
  },
};

const MapImage = Template.bind({});

MapImage.args = {
  ...Default.args,
  mapImage: MirageImage,
};

export { MapImage, Default };
