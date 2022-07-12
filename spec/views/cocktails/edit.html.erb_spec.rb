require 'rails_helper'

RSpec.describe "cocktails/edit", type: :view do
  before(:each) do
    @cocktail = assign(:cocktail, Cocktail.create!(
      image: "MyString",
      ingredients: "MyText",
      directions: "MyText"
    ))
  end

  it "renders the edit cocktail form" do
    render

    assert_select "form[action=?][method=?]", cocktail_path(@cocktail), "post" do

      assert_select "input[name=?]", "cocktail[image]"

      assert_select "textarea[name=?]", "cocktail[ingredients]"

      assert_select "textarea[name=?]", "cocktail[directions]"
    end
  end
end
