import React from "react";
import styled from "styled-components";
import TeamSection from "../TeamSection";

export default class MapSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const validatedTeamProps = this.ValidatedMapPicks(this.props);

    return this.props.mapImage
      ? this.CustomMapSection({ ...this.props, ...validatedTeamProps })
      : this.DefaultMapSection({ ...this.props, ...validatedTeamProps });
  }

  CustomMapSection(props) {
    return (
      <CustomImageContainer
        className="map-section-container"
        title="custom-map-image"
        mapImage={props.mapImage}
      >
        {this.ToMapContents(props)}
      </CustomImageContainer>
    );
  }

  DefaultMapSection(props) {
    return (
      <DefaultContainer
        className="map-section-container"
        title="default-map-image"
      >
        {this.ToMapContents(props)}
      </DefaultContainer>
    );
  }

  ToMapContents(validatedTeamProps) {
    return (
      <>
        {this.ToTeamSection(validatedTeamProps.teamOne)}
        <MapSpan className="map-section-name">{this.ToMapName()}</MapSpan>
        {this.ToTeamSection(validatedTeamProps.teamTwo)}
      </>
    );
  }

  ToMapName() {
    return this.props.map ? this.props.map.toLocaleUpperCase() : "TBD";
  }

  ToTeamSection({ imageSrc, rounds, mapPick }) {
    return (
      <TeamSection imageSrc={imageSrc} rounds={rounds} mapPick={mapPick} />
    );
  }

  ValidatedMapPicks({ teamOne, teamTwo }) {
    if (teamOne.mapPick && teamTwo.mapPick) {
      return {
        ...{ teamOne, ...{ teamOne: { mapPick: false } } },
        ...{ teamTwo, ...{ teamTwo: { mapPick: false } } },
      };
    }

    return { teamOne, teamTwo };
  }
}

MapSection.defaultProps = {
  map: "TBD",
  teamOne: {},
  teamTwo: {},
};

const MapContainer = styled.div`
  padding: 10px;
  min-height: 80px;

  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to top left, #5583ee, #212121);
  align-items: center;
  border-radius: 3px;

  @media only screen and (max-width: 420px) {
    min-width: 100px;
  }
`;

const DefaultContainer = styled(MapContainer)`
  background: linear-gradient(to top left, #5583ee, #212121);
`;

const CustomImageContainer = styled(MapContainer)`
  background-image: ${(props) =>
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))," +
    `url(${props.mapImage})};`}
  background-size: 100%;
  background-position: center;
`;

const MapSpan = styled.span`
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  letter-spacing: 8px;
  opacity: 0.8;
  cursor: default;
  color: #f5f5f5;
  text-align: center;
  width: 66%;
`;
