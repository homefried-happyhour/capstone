// Imports React into our test file.
import React from "react";
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from "enzyme";
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from "enzyme-adapter-react-16";
// Imports in the component we are going to be testing.
import Header from "./Header";
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
import { cocktails } from "../mockCocktails";
Enzyme.configure({ adapter: new Adapter() });

describe("When Header renders", () => {
  const props = {
    logged_in: true,
    current_user: { email: "testemail@test.com" },
  };

  it("displays a heading", () => {
    const header = shallow(<Header {...props} cocktails={cocktails} />);
    const heading = header.find("Button");
    expect(heading.length).toEqual(1 + cocktails.length * 3);
  });
});
