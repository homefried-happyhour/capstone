// Imports React into our test file.
import React from "react";
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from "enzyme";
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from "enzyme-adapter-react-16";
// Imports in the component we are going to be testing.
import LastCallIndex from "./LastCallIndex";
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() });

describe("When LastCallIndex renders", () => {
  const cocktails = [
    {
      name: "Bloody Mary",
      image:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/Bloody-Mary_EXPS_BMZ17_37175_D10_25_1b-4.jpg?resize=696,696",
      ingredients: [
        " celery salt",
        "ice cubes",
        "vodka",
        "tomato juice (chilled)",
        "lemon juice",
        "lime juice",
        "Worcestershire sauce",
        "horseradish (optional)",
        "black pepper",
        "hot pepper sauce",
        "optional garnishes: Celery rib, pickle spear, green and ripe olives, cucumber slice and/or cocktail shrimp",
      ],
      directions: [
        "Garnish rim of tall glass with celery salt.",
        "Place remaining ice in prepared glass.",
        "Add 2 oz. vodka, 1 cup tomato juice, 1 tbsp. lemon juice, 1-1/2 tsp. lime juice, 3/4 tsp. Worcestershire sauce, 1/2 tsp. horseradish, 1/8 tsp. pepper, 1/8 tsp celery salt and 1/8 tsp. hot pepper sauce to shaker; cover and shake.",
        "Strain into prepared glass.",
        "Garnish as desired.",
      ],
    },
    {
      name: "Moscow Mule",
      image:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps166450_HC173837B03_04_10b.jpg?resize=700,700",
      ingredients: [
        "ginger beer (chilled)",
        "cup lime juice",
        "vodka",
        "ice cubes",
        "Lime slices (optional)",
      ],
      directions: [
        "Combine 4 cups ginger beer, 2/3 cup lime juice and 1-1/4 cups vodka in a pitcher.",
        "Serve over ice.",
        "If desired, serve with lime slices.",
      ],
    },
    {
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

  it("displays 3 cards", () => {
    const lastCallIndexRender = shallow(
      <LastCallIndex cocktails={cocktails} />
    );
    const cardsArray = lastCallIndexRender.find("Card");
    console.log("Cards: ", cardsArray.debug());
    expect(cardsArray.length).toEqual(3);
  });
});
