require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe "/cocktails", type: :request do
  # This should return the minimal set of attributes required to create a valid
  # Cocktail. As you add validations to Cocktail, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    {
      image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mimosa-1652105768.jpg?crop=1.00xw:0.668xh;0,0.118xh&resize=980:*",
      ingredients: ["sparkling wine", "orange juice"],
      directions: ["Combine chilled sparkling wine and orange juice in a champaign flute."],
      name: "Mimosa",
      user_id: 1
    }
  }

  let(:invalid_attributes) {
    {
      image: nil,
      ingredients: nil,
      directions: nil,
      name: nil,
      user_id: nil
    }
  }

  # This should return the minimal set of values that should be in the headers
  # in order to pass any filters (e.g. authentication) defined in
  # CocktailsController, or in your router and rack
  # middleware. Be sure to keep this updated too.
  let(:valid_headers) {
    {}
  }

  User.create(email: 'adminS@homefry.com',password:'12345678', password_confirmation:'12345678')

  describe "GET /index" do
    it "renders a successful response" do
      Cocktail.create! valid_attributes
      get cocktails_url, headers: valid_headers, as: :json
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      cocktail = Cocktail.create! valid_attributes
      get cocktail_url(cocktail), as: :json
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Cocktail" do
        expect {
          post cocktails_url,
               params: { cocktail: valid_attributes }, headers: valid_headers, as: :json
        }.to change(Cocktail, :count).by(1)
      end

      it "renders a JSON response with the new cocktail" do
        post cocktails_url,
             params: { cocktail: valid_attributes }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:created)
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Cocktail" do
        expect {
          post cocktails_url,
               params: { cocktail: invalid_attributes }, as: :json
        }.to change(Cocktail, :count).by(0)
      end

      it "renders a JSON response with errors for the new cocktail" do
        post cocktails_url,
             params: { cocktail: invalid_attributes }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
            {
              image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mimosa-1652105768.jpg?crop=1.00xw:0.668xh;0,0.118xh&resize=980:*",
              ingredients: ["sparkling wine", "orange juice"],
              directions: ["Combine chilled sparkling wine and orange juice in a champaign flute."],
              name: "Mimosa",
              user_id: 1
            }
      }

      it "updates the requested cocktail" do
        cocktail = Cocktail.create! valid_attributes
        patch cocktail_url(cocktail),
              params: { cocktail: new_attributes }, headers: valid_headers, as: :json
        cocktail.reload
        skip("Add assertions for updated state")
      end

      it "renders a JSON response with the cocktail" do
        cocktail = Cocktail.create! valid_attributes
        patch cocktail_url(cocktail),
              params: { cocktail: new_attributes }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end

    context "with invalid parameters" do
      it "renders a JSON response with errors for the cocktail" do
        cocktail = Cocktail.create! valid_attributes
        patch cocktail_url(cocktail),
              params: { cocktail: invalid_attributes }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested cocktail" do
      cocktail = Cocktail.create! valid_attributes
      expect {
        delete cocktail_url(cocktail), headers: valid_headers, as: :json
      }.to change(Cocktail, :count).by(-1)
    end
  end
end
