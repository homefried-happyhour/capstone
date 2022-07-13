require 'rails_helper'

RSpec.describe "cocktails/new", type: :view do
  before(:each) do
    assign(:cocktail, Cocktail.new(
      name: "MyString",
      image: "MyString",
      ingredients: "MyText",
      directions: "MyText",
      user: nil
    ))
  end

  it "renders new cocktail form" do
    render

    assert_select "form[action=?][method=?]", cocktails_path, "post" do

      assert_select "input[name=?]", "cocktail[name]"

      assert_select "input[name=?]", "cocktail[image]"

      assert_select "textarea[name=?]", "cocktail[ingredients]"

      assert_select "textarea[name=?]", "cocktail[directions]"

      assert_select "input[name=?]", "cocktail[user_id]"
    end
  end
end
