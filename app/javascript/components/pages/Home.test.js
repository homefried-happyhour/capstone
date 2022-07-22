// Imports React into our test file.
import React from "react";
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from "enzyme";
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from "enzyme-adapter-react-16";
// Imports in the component we are going to be testing.
import Home from "./Home";
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
import { cocktails } from "../mockCocktails";
Enzyme.configure({ adapter: new Adapter() });

describe("When Home renders", () => {
  it("displays a heading", () => {
    const home = shallow(<Home />);
    const homeHeading = home.find("h3");
    expect(homeHeading.length).toEqual(1);
  });
});
describe("When Home renders", () => {
  it("displays bubble animation container", () => {
    const home = shallow(<Home />);
    const bubbleContainer = home.find(`[className="bubbles-container"]`);
    expect(bubbleContainer.length).toEqual(1);
  });
});
describe("When Home renders", () => {
  it("displays a carousel", () => {
    const home = shallow(<Home />);
    const carousel = home.find("Carousel");
    expect(carousel.length).toEqual(1);
  });
});
describe("When Home renders", () => {
  it("displays images", () => {
    const home = shallow(<Home cocktails={cocktails} />);
    const images = home.find("img");
    expect(images.length).toEqual(3);
  });
});
