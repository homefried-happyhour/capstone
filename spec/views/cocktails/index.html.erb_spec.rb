require 'rails_helper'

RSpec.describe "cocktails/index", type: :view do
  before(:each) do
    assign(:cocktails, [
      Cocktail.create!(
        image: "Image",
        ingredients: "MyText",
        directions: "MyText"
      ),
      Cocktail.create!(
        image: "Image",
        ingredients: "MyText",
        directions: "MyText"
      )
    ])
  end

  it "renders a list of cocktails" do
    render
    assert_select "tr>td", text: "Image".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
  end
end
