import React from "react";
import styled from "styled-components";
import MapSection from "../../controls/MapSection";

import { TeamIds } from "../../model/TeamEnum";

const MatchBoardContainer = styled.div`
  min-width: 408px;
  width: 408px;
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  border-radius: 3px;

  @media only screen and (max-width: 420px) {
    min-width: calc(100% - 20px);
    max-width: calc(100% - 20px);
  }
`;

export default class MatchBoard extends React.Component {
  render() {
    const matchMaps =
      this.props.match && this.props.match.maps ? this.props.match.maps : [];

    return (
      <MatchBoardContainer>
        {matchMaps.map((x) => {
          return this.ToMapSection(x, this.props.match);
        })}
      </MatchBoardContainer>
    );
  }

  ToMapSection(x, match) {
    return (
      <MapSection
        key={x.name}
        map={x.name}
        mapImage={x.mapImage}
        teamOne={{
          imageSrc: match.teamOne.imageSrc,
          rounds: x.teamOneScore,
          mapPick: x.mapPick === TeamIds.TEAM_ONE,
        }}
        teamTwo={{
          imageSrc: match.teamTwo.imageSrc,
          rounds: x.teamTwoScore,
          mapPick: x.mapPick === TeamIds.TEAM_TWO,
        }}
      />
    );
  }
}
