class CreateUserDrinks < ActiveRecord::Migration[7.0]
  def change
    create_table :user_drinks do |t|
      t.integer :user_id
      t.integer :cocktail_id

      t.timestamps
    end
  end
end
