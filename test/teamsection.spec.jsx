import "jest-enzyme";
import "jest-styled-components";

import React from "react";
import { mount, shallow, unmount } from "../enzyme";
import TeamSection from "../src/controls/TeamSection";

import TestLogo from "../../assets/faze.svg";

describe("<TeamSection/>", () => {
  let wrapper;

  describe("has a imageSrc property that", () => {
    it("accepts an image src string", () => {
      wrapper = mount(<TeamSection imageSrc={TestLogo} />);
      expect(wrapper.find("img")).toExist();
    });

    it("uses a default icon if no image url given", () => {
      wrapper = mount(<TeamSection />);
      expect(wrapper.find("svg")).toExist();
    });
  });

  describe("has a rounds property", () => {
    it("defaults to '' if empty or invalid", () => {
      wrapper = mount(<TeamSection />);
      expect(wrapper.find(".team-section-rounds").at(1).text()).toBe("");
    });

    it("displays a given round number", () => {
      wrapper = mount(<TeamSection rounds={12} />);
      expect(wrapper.find(".team-section-rounds").at(1).text()).toBe("12");
    });
  });

  describe("has a mapPick prop", () => {
    it("shows nothing by default", () => {
      expect(wrapper.find(".team-section-map-pick")).not.toExist();
    });

    it("shows a 'map pick' indicator if true", () => {
      wrapper = mount(<TeamSection mapPick />);

      expect(wrapper.find(".team-section-map-pick")).toExist();
    });
  });
});
