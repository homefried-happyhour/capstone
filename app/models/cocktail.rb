class Cocktail < ApplicationRecord
  belongs_to :user
  validates :name, :image, :ingredients, :directions, presence:true
  validate :ingredients_is_array, :directions_is_array
  
  def ingredients_is_array
    if !ingredients.kind_of?(Array)
      errors.add(:ingredients, "must be an array")
    end
  end
  def directions_is_array
    if !directions.kind_of?(Array)
      errors.add(:directions, "must be an array")
    end
  end

  
end
