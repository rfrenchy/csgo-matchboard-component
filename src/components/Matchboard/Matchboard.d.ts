export interface IMatchProps {
  teamOne: ITeam;
  teamTwo: ITeam;
  maps: IMap[];
}

export interface ITeam {
  imageSrc?: string;
}

export interface IMap {
  name?: string;
  mapImage?: string;
  teamOneScore?: number | string;
  teamTwoScore?: number | string;
  mapPick?: number;
}

export interface MatchboardProps {
  match: IMatchProps;
}

export default function MatchBoard(props: MatchboardProps): JSX.Element;
