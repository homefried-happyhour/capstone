// Imports React into our test file.
import React from "react";
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from "enzyme";
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from "enzyme-adapter-react-16";
// Imports in the component we are going to be testing.
import LastCallShow from "./LastCallShow";
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() });

describe("When LastCallShow renders", () => {
  const cocktails = [
    {
      id: undefined,
      name: "Old Fashioned",
      image:
        "https://www.liquor.com/thmb/_0WLXSRV03SfpWgZ1hwiAkyIrzE=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__08113350__bourbon-old-fashioned-720x720-recipe-ade6f7780c304999be3577e565c9bcdd.jpg",
      ingredients: [
        "Rye or bourbon",
        "sugar",
        "angostura bitters",
        "orange slice and twist (optional)",
      ],
      directions: [
        "Add 1/2 teaspoon sugar, 3 dashes Angostura bitters to a rocks glass, then add 1 teaspoon water, and stir until the sugar is nearly dissolved.",
        "Fill the glass with large ice cubes, add 2 ounces bourbon, and gently stir to combine.",
        "Express the oil of an orange peel over the glass, then drop in.",
      ],
    },
  ];
  const logged = {
    logged_in: true,
  };

  it("displays a card", () => {
    const lastCallShowRender = shallow(
      <LastCallShow logged_in={logged} cocktails={cocktails} />
    );
    const cardsArray = lastCallShowRender.find("Card");
    expect(cardsArray.length).toEqual(1);
  });
  it("displays a delete button when logged in", () => {
    const lastCallShowRender = shallow(
      <LastCallShow logged_in={logged} cocktails={cocktails} />
    );
    const deleteButton = lastCallShowRender.find(`[id="delete"]`);
    expect(deleteButton.length).toEqual(1);
  });
  it("displays a edit button when logged in", () => {
    const lastCallShowRender = shallow(
      <LastCallShow logged_in={logged} cocktails={cocktails} />
    );
    const editButton = lastCallShowRender.find(`[id="edit"]`);
    expect(editButton.length).toEqual(1);
  });
  it("displays a edit button when logged in", () => {
    const lastCallShowRender = shallow(
      <LastCallShow logged_in={logged} cocktails={cocktails} />
    );
    const editButton = lastCallShowRender.find(`[id="edit"]`);
    expect(editButton.length).toEqual(1);
  });
});
