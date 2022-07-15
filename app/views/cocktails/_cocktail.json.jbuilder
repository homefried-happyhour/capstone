json.extract! cocktail, :id, :name, :image, :ingredients, :directions, :user_id, :created_at, :updated_at
json.url cocktail_url(cocktail, format: :json)
