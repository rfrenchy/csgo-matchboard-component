import React from "react";
import styled from "styled-components";
import { BsPeopleFill } from "react-icons/bs";

export default class TeamSection extends React.Component {
  render() {
    const rounds = parseInt(this.props.rounds) || "-";

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
        <TeamRounds className="team-section-rounds">{rounds}</TeamRounds>
      </TeamSectionContainer>
    );
  }

  ToTeamImage() {
    return this.props.imageSrc ? (
      <TeamImage src={this.props.imageSrc} />
    ) : (
      <BsPeopleFill style={{ height: "65px", width: "35px" }} /> // change to use this https://styled-icons.js.org/
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
`;

const TeamImage = styled.img`
  min-height: 100%;
  min-width: 100%;
  max-height: 100%;
  max-width: 100%;
`;

const TeamRounds = styled.span`
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  opacity: 0.8;
  cursor: default;
  color: #f5f5f5;
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
`;
