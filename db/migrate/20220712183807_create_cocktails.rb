class CreateCocktails < ActiveRecord::Migration[7.0]
  def change
    create_table :cocktails do |t|
      t.string :image
      t.text :ingredients, array: true, default:[]
      t.text :directions, array: true, default:[]

      t.timestamps
    end
  end
end
