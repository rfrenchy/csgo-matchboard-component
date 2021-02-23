# csgo-matchboard-component

A React component to display CSGO Match information

![3 Map Component](./src/assets/preview.png)

View on [Storybook](http://csgo-matchboard-component-storybook.s3-website.eu-west-2.amazonaws.com/)

## Usage

```js


const matchBoardData = {
  teamOne: { imageSrc: "path/to/team-one-logo.svg" | "" },
  teamTwo: { imageSrc: "path/to/team-two-logo.svg" | "" },
  maps: [
    {
      name: "Mirage" | "Nuke" | "Overpass" | "" | ...,
      teamOneScore: number | "",
      teamTwoScore: number | "",
      mapPick: TeamIds.TEAM_ONE | TeamIds.TEAM_TWO | "",
      mapImage: "path/to/map-image.png" | "",
    },
    ...
  ],
};

...

<Matchboard match={matchBoardData} />

...

```
