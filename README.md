# csgo-matchboard-component

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/rfrenchy/csgo-matchboard-component/blob/main/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@rfrenchy/csgo-matchboard-component/latest.svg)](https://www.npmjs.com/package/@rfrenchy/csgo-matchboard-component)
[![npm downloads](https://img.shields.io/npm/dm/@rfrenchy/csgo-matchboard-component.svg)](https://www.npmjs.com/package/@rfrenchy/csgo-matchboard-component)

A React component to display CSGO Match information

![3 Map Component](./src/assets/preview.png)

## Install

```sh
// with npm
npm install @rfrenchy/csgo-matchboard-component

// with yarn
yarn add @rfrenchy/csgo-matchboard-component
```

## Demo

View on [Storybook](http://csgo-matchboard-component-storybook.s3-website.eu-west-2.amazonaws.com/?path=/story/demo-matchboard--one-map)

## Usage

```js
// Matchboard
import React from "react";
import MatchBoard from "@rfrenchy/csgo-matchboard-component/lib/Matchboard";

const match = {
  teamOne: { imageSrc: "./team_one.svg" },
  teamTwo: { imageSrc: "./team_two.svg" },
  maps: [
    {
      name: "Mirage",
      mapImage: "./mirage.png",
      teamOneScore: 12,
      teamTwoScore: 5,
      mapPick: 1,
    },
  ],
};

class App extends React.Component {
  render() {
    return <MatchBoard match={match} />;
  }
}
```

## License

MIT Licensed.
