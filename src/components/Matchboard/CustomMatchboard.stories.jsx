import React from "react";
import Matchboard from "./index";

import AstralisLogo from "../../assets/teams/astralis.svg";
import FazeLogo from "../../assets/teams/faze.svg";
import LiquidLogo from "../../assets/teams/liquid.svg";
import BIGLogo from "../../assets/teams/BIG.svg";

import MirageImage from "../../assets/maps/mirage.jpg";
import NukeImage from "../../assets/maps/nuke.jpg";
import InfernoImage from "../../assets/maps/inferno.jpg";
import Dust2 from "../../assets/maps/dust2.jpg";
import Overpass from "../../assets/maps/overpass.jpg";

import { TeamIds } from "../../model/TeamEnum";

export default {
  component: Matchboard,
  title: "Custom Matchboard",
  argTypes: {
    mapName: {
      control: {
        type: "select",
        options: ["", "Mirage", "Nuke", "Overpass", "Inferno", "Dust 2"],
      },
    },
    mapPick: {
      control: {
        type: "radio",
        options: [TeamIds.TEAM_ONE, TeamIds.TEAM_TWO, "None"],
      },
    },
    teamOneScore: {
      control: {
        type: "number",
        min: 0,
        max: 30,
        step: 1,
      },
    },
    teamTwoScore: {
      control: {
        type: "number",
        min: 0,
        max: 30,
        step: 1,
      },
    },
    mapImage: {
      control: {
        type: "select",
        options: ["", MirageImage, NukeImage, InfernoImage, Dust2, Overpass],
      },
    },
    teamOneImage: {
      control: {
        type: "select",
        options: ["", AstralisLogo, FazeLogo, LiquidLogo, BIGLogo],
      },
    },
    teamTwoImage: {
      control: {
        type: "select",
        options: ["", AstralisLogo, FazeLogo, LiquidLogo, BIGLogo],
      },
    },
  },
};

const Template = ({
  mapImage,
  teamOneImage,
  teamTwoImage,
  mapName,
  mapPick,
  teamOneScore,
  teamTwoScore,
}) => {
  const matchBoardData = {
    match: {
      teamOne: { imageSrc: teamOneImage },
      teamTwo: { imageSrc: teamTwoImage },
      maps: [
        {
          name: mapName,
          teamOneScore,
          teamTwoScore,
          mapPick,
          mapImage,
        },
      ],
    },
  };

  return <Matchboard {...matchBoardData} />;
};

const Customise = Template.bind({});

export { Customise };
