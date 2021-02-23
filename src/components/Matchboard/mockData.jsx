import AstralisLogo from "../../assets/teams/astralis.svg";
import FazeLogo from "../../assets/teams/faze.svg";
import MirageImage from "../../assets/maps/mirage.jpg";
import NukeImage from "../../assets/maps/nuke.jpg";
import InfernoImage from "../../assets/maps/inferno.jpg";
import Dust2 from "../../assets/maps/dust2.jpg";
import Overpass from "../../assets/maps/overpass.jpg";

import { TeamIds } from "../../model/TeamEnum";

const maps = [
  {
    name: "Mirage",
    teamOneScore: 8,
    teamTwoScore: 16,
    mapPick: TeamIds.TEAM_ONE,
    mapImage: MirageImage,
  },
  {
    name: "Inferno",
    mapPick: TeamIds.TEAM_TWO,
    teamOneScore: "16",
    teamTwoScore: "2",
    mapImage: InfernoImage,
  },
  {
    name: "Nuke",
    teamOneScore: "21",
    teamTwoScore: "19",
    mapPick: TeamIds.TEAM_ONE,
    winner: TeamIds.TEAM_ONE,
    mapImage: NukeImage,
  },
  {
    name: "Dust 2",
    teamOneScore: "12",
    teamTwoScore: "13",
    winner: TeamIds.TEAM_ONE,
    mapImage: Dust2,
  },
  {
    name: "Overpass",
    teamOneScore: "",
    teamTwoScore: "",
    winner: TeamIds.TEAM_TWO,
    mapImage: Overpass,
  },
];

export const OneMapMatch = {
  teamOne: { imageSrc: AstralisLogo },
  teamTwo: { imageSrc: FazeLogo },
  maps: [maps[0]],
};

export const TwoMapMatch = {
  teamOne: { imageSrc: AstralisLogo },
  teamTwo: { imageSrc: FazeLogo },
  maps: [maps[0], maps[1]],
};

export const ThreeMapMatch = {
  teamOne: { imageSrc: AstralisLogo },
  teamTwo: { imageSrc: FazeLogo },
  maps: [maps[0], maps[1], maps[2]],
};

export const FourMapMatch = {
  teamOne: { imageSrc: AstralisLogo },
  teamTwo: { imageSrc: FazeLogo },
  maps: [maps[0], maps[1], maps[2], maps[3]],
};

export const FiveMapMatch = {
  teamOne: { imageSrc: AstralisLogo },
  teamTwo: { imageSrc: FazeLogo },
  maps: [maps[0], maps[1], maps[2], maps[3], maps[4]],
};

export const EmptyMap = {
  teamOne: { imageSrc: AstralisLogo },
  teamTwo: { imageSrc: FazeLogo },
  maps: [{}],
};
