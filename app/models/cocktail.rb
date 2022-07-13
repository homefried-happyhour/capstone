class Cocktail < ApplicationRecord
    belongs_to :user
    validates :image, :name, :ingredients, :directions, :user_id, presence: true
end
