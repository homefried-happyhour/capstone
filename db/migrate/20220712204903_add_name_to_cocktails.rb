class AddNameToCocktails < ActiveRecord::Migration[7.0]
  def change
    add_column :cocktails, :name, :string
  end
end
