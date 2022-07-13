require 'rails_helper'

RSpec.describe "cocktails/index", type: :view do
  before(:each) do
    assign(:cocktails, [
      Cocktail.create!(
        name: "Name",
        image: "Image",
        ingredients: "MyText",
        directions: "MyText",
        user: nil
      ),
      Cocktail.create!(
        name: "Name",
        image: "Image",
        ingredients: "MyText",
        directions: "MyText",
        user: nil
      )
    ])
  end

  it "renders a list of cocktails" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: "Image".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
  end
end
