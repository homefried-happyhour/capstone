// Imports React into our test file.
import React from "react";
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from "enzyme";
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from "enzyme-adapter-react-16";
// Imports in the component we are going to be testing.
import Ingredient from "./Ingredient";
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() });

describe("When Ingredient renders", () => {
  const cocktail = [
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
  ];
  it("displays a heading", () => {
    const search = shallow(<Ingredient cocktail={cocktail} />);
    const searchForm = search.find("Card");
    console.log("Card", searchForm.debug());
    expect(searchForm.length).toEqual(1);
  });
});
