require 'rails_helper'

RSpec.describe "cocktails/new", type: :view do
  before(:each) do
    assign(:cocktail, Cocktail.new(
      image: "MyString",
      ingredients: "MyText",
      directions: "MyText"
    ))
  end

  it "renders new cocktail form" do
    render

    assert_select "form[action=?][method=?]", cocktails_path, "post" do

      assert_select "input[name=?]", "cocktail[image]"

      assert_select "textarea[name=?]", "cocktail[ingredients]"

      assert_select "textarea[name=?]", "cocktail[directions]"
    end
  end
end
