require 'rails_helper'

RSpec.describe "cocktails/show", type: :view do
  before(:each) do
    @cocktail = assign(:cocktail, Cocktail.create!(
      image: "Image",
      ingredients: "MyText",
      directions: "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Image/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
  end
end
