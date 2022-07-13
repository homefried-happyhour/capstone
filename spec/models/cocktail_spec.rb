require 'rails_helper'

RSpec.describe Cocktail, type: :model do
  User.create(email: 'adminS@homefry.com',password:'12345678', password_confirmation:'12345678')
  user = User.first

  it 'can create a cocktail with valid attributes' do
    user.cocktails.create(
      {
          name: "Bloody Mary",
          image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Bloody-Mary_EXPS_BMZ17_37175_D10_25_1b-4.jpg?resize=696,696",
          ingredients: ["celery salt", "ice cubes", "vodka", "tomato juice (chilled)", "lemon juice", "lime juice", "Worcestershire sauce", "horseradish (optional)", "black pepper", "hot pepper sauce", "optional garnishes: Celery rib, pickle spear, green and ripe olives, cucumber slice and/or cocktail shrimp"],
          directions: ["Garnish rim of tall glass with celery salt.", "Place remaining ice in prepared glass.", "Add 2 oz. vodka, 1 cup tomato juice, 1 tbsp. lemon juice, 1-1/2 tsp. lime juice, 3/4 tsp. Worcestershire sauce, 1/2 tsp. horseradish, 1/8 tsp. pepper, 1/8 tsp celery salt and 1/8 tsp. hot pepper sauce to shaker; cover and shake.", "Strain into prepared glass.", "Garnish as desired."]
      }
    )
    cocktails = Cocktail.all
    p cocktails
    expect(cocktails.length).to eq 1
  end

  it 'cannot create a cocktail with invalid attributes' do
    cocktail = user.cocktails.create(
      {}
    )
    p cocktail.errors
    expect(cocktail.errors).to_not be_empty
  end
end
