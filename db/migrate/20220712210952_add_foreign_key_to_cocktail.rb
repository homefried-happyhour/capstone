class AddForeignKeyToCocktail < ActiveRecord::Migration[7.0]
  def change
    add_column :cocktails, :user_id, :integer
  end
end
