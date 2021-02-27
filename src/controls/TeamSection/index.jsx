import React from "react";
import styled from "styled-components";
import { Team as DefaultTeamIcon } from "@styled-icons/remix-fill/Team";

export default class TeamSection extends React.Component {
  render() {
    const parsedRounds = parseInt(this.props.rounds);
    const rounds = isNaN(parsedRounds) ? "" : parsedRounds;

    const mapPickChip = this.props.mapPick ? (
      <MapPickChip className="team-section-map-pick">MAP PICK</MapPickChip>
    ) : (
      <MapPickChip style={{ opacity: 0 }}>-</MapPickChip>
    );

    return (
      <TeamSectionContainer className={"team-section-container"}>
        {mapPickChip}
        <TeamStyling className="team-section-image">
          {this.ToTeamImage()}
        </TeamStyling>
        <TeamRounds key={rounds} className="team-section-rounds">
          {rounds}
        </TeamRounds>
      </TeamSectionContainer>
    );
  }

  ToTeamImage() {
    return this.props.imageSrc ? (
      <TeamImage src={this.props.imageSrc} />
    ) : (
      <DefaultTeamIcon color={"#aaa"} />
    );
  }
}

const TeamSectionContainer = styled.div`
  display: grid;
  grid-template-rows: 15% 65% 20%;
  width: 17%;
  height: 100%;
  justify-items: center;
  align-items: center;
`;

const TeamStyling = styled.div`
  min-height: 65px;

  width: 50px;
  margin: 2px;
  display: grid;
  justify-items: center;
  align-items: center;

  @media only screen and (max-width: 320px) {
    width: 30px;
  }
`;

const TeamImage = styled.img`
  min-height: 100%;
  min-width: 100%;
  max-height: 100%;
  max-width: 100%;
`;

const TeamRounds = styled.span`
  @keyframes roundChange {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.8;
    }
  }

  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  opacity: 0.8;
  cursor: default;
  color: #f5f5f5;
  animation-name: roundChange;
  animation-duration: 1s;
`;

const MapPickChip = styled.span`
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  opacity: 0.8;
  cursor: default;
  font-size: 0.6em;
  background: #0d47a1;
  border-radius: 5px;
  padding: 0 8px;
  color: #eee;
  text-overflow: clip;
  min-width: 46px;

  @media only screen and (max-width: 320px) {
    min-width: 30px;
    font-size: 0.3em;
  }
`;
