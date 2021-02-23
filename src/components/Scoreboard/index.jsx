import React from "react";
import styled from "styled-components";
import MapSection from "../../controls/MapSection/";

import { TeamIds } from "../../model/TeamEnum";

const Demo = styled.div`
  height: 98vh;
  width: 98vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScoreBoardContainer = styled.div`
  min-width: 408px;
  width: 408px;
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  background-color: rgba(158, 158, 158, 0.5);
  border-radius: 3px;
`;

export default class ScoreBoard extends React.Component {
  render() {
    return (
      <ScoreBoardContainer>
        {this.props.match.maps.map((x) => {
          return this.ToMapSection(x, this.props.match);
        })}
      </ScoreBoardContainer>
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
