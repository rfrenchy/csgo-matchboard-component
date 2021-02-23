import "jest-enzyme";
import "jest-styled-components";

import React from "react";
import MapSection from "../src/controls/MapSection";

import TestLogo from "../assets/faze.svg";
import TestMapImage from "../assets/mirage.jpg";

import { mount } from "../enzyme";

const invalidMapPickValues = [
  4,
  5,
  "asd",
  512,
  -1,
  "longer string",
  "team one",
  undefined,
];

describe("<MapSection/>", () => {
  it("contains 2 team sections", () => {
    const wrapper = mount(<MapSection />);
    expect(wrapper.find("TeamSection")).toHaveLength(2);
  });

  describe("has a map prop", () => {
    it("defaults to TBD if empty", () => {
      const wrapper = mount(<MapSection />);

      expect(wrapper.find(".map-section-name").at(1).text()).toEqual("TBD");
    });

    it("shows a given map name", () => {
      const mapName = "Mirage";
      const wrapper = mount(<MapSection map={mapName} />);

      expect(wrapper.find(".map-section-name").at(1).text()).toEqual(
        mapName.toLocaleUpperCase()
      );
    });
  });

  describe("has a map pick prop", () => {
    it("show nothing if empty", () => {
      const wrapper = mount(<MapSection />);

      expect(wrapper.find(".team-section-map-pick")).not.toExist();
    });

    invalidMapPickValues.forEach((x) => {
      it(`shows nothing for invalid value ${x}`, () => {
        const wrapper = mount(<MapSection mapPick={x} />);
        expect(wrapper.find(".team-section-map-pick")).not.toExist();
      });
    });

    it("shows the map pick for team one", () => {
      const wrapper = mount(<MapSection teamOne={{ mapPick: true }} />);
      expect(wrapper.find(".team-section-map-pick")).toExist();
    });

    it("shows the map pick for team two", () => {
      const wrapper = mount(<MapSection teamTwo={{ mapPick: true }} />);
      expect(wrapper.find(".team-section-map-pick")).toExist();
    });

    it("show no map picks if set to true for both teams", () => {
      const wrapper = mount(
        <MapSection teamOne={{ mapPick: true }} teamTwo={{ mapPick: true }} />
      );
      expect(wrapper.find(".team-section-map-pick")).not.toExist();
    });
  });

  describe("has team props", () => {
    it("shows given teamOne props", () => {
      const wrapper = mount(
        <MapSection teamOne={{ imageSrc: <TestLogo />, rounds: 16 }} />
      );

      expect(wrapper.find(".team-section-image").at(1)).toExist();
      expect(wrapper.find(".team-section-rounds").at(1).text()).toBe("16");
    });

    it("shows given teamTwo props", () => {
      const wrapper = mount(
        <MapSection teamTwo={{ imageSrc: <TestLogo />, rounds: 2 }} />
      );

      expect(wrapper.find(".team-section-image").at(3)).toExist();
      expect(wrapper.find(".team-section-rounds").at(3).text()).toBe("2");
    });
  });

  describe("has a mapImage", () => {
    it("shows given custom image over the map section", () => {
      const container = mount(<MapSection mapImage={TestMapImage} />)
        .find("[title='custom-map-image']")
        .at(1);

      expect(container).toExist();
    });

    it("shows a default background if no custom image given", () => {
      const container = mount(<MapSection />)
        .find("[title='default-map-image']")
        .at(1);

      expect(container).toExist();
    });
  });
});
