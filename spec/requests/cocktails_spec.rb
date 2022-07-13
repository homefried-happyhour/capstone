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
      image:
       "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mimosa-1652105768.jpg?crop=1.00xw:0.668xh;0,0.118xh&resize=980:*",
      ingredients: ["sparkling wine", "orange juice"],
      directions: ["Combine chilled sparkling wine and orange juice in a champaign flute."],
      name: "Mimosa",
      user_id: 1
    }
  }

  let(:invalid_attributes) {
    {
      image:
       nil,
      ingredients: nil,
      directions: nil,
      name: nil,
      user_id: nil
    }
  }

  User.create(email: 'adminS@homefry.com',password:'12345678', password_confirmation:'12345678')

  describe "GET /index" do
    it "renders a successful response" do
      Cocktail.create! valid_attributes
      get cocktails_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      cocktail = Cocktail.create! valid_attributes
      get cocktail_url(cocktail)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_cocktail_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      cocktail = Cocktail.create! valid_attributes
      get edit_cocktail_url(cocktail)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Cocktail" do
        expect {
          post cocktails_url, params: { cocktail: valid_attributes }
        }.to change(Cocktail, :count).by(1)
      end

      it "redirects to the created cocktail" do
        post cocktails_url, params: { cocktail: valid_attributes }
        expect(response).to redirect_to(cocktail_url(Cocktail.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Cocktail" do
        expect {
          post cocktails_url, params: { cocktail: invalid_attributes }
        }.to change(Cocktail, :count).by(0)
      end

      it "renders a successful response (i.e. to display the 'new' template)" do
        post cocktails_url, params: { cocktail: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested cocktail" do
        cocktail = Cocktail.create! valid_attributes
        patch cocktail_url(cocktail), params: { cocktail: new_attributes }
        cocktail.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the cocktail" do
        cocktail = Cocktail.create! valid_attributes
        patch cocktail_url(cocktail), params: { cocktail: new_attributes }
        cocktail.reload
        expect(response).to redirect_to(cocktail_url(cocktail))
      end
    end

    context "with invalid parameters" do
      it "renders a successful response (i.e. to display the 'edit' template)" do
        cocktail = Cocktail.create! valid_attributes
        patch cocktail_url(cocktail), params: { cocktail: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested cocktail" do
      cocktail = Cocktail.create! valid_attributes
      expect {
        delete cocktail_url(cocktail)
      }.to change(Cocktail, :count).by(-1)
    end

    it "redirects to the cocktails list" do
      cocktail = Cocktail.create! valid_attributes
      delete cocktail_url(cocktail)
      expect(response).to redirect_to(cocktails_url)
    end
  end
end
