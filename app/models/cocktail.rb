class Cocktail < ApplicationRecord
  belongs_to :user
  validates :name, :image, :ingredients, :directions, presence:true
end
