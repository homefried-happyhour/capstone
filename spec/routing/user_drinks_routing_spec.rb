require "rails_helper"

RSpec.describe UserDrinksController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/user_drinks").to route_to("user_drinks#index")
    end

    it "routes to #show" do
      expect(get: "/user_drinks/1").to route_to("user_drinks#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/user_drinks").to route_to("user_drinks#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/user_drinks/1").to route_to("user_drinks#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/user_drinks/1").to route_to("user_drinks#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/user_drinks/1").to route_to("user_drinks#destroy", id: "1")
    end
  end
end
