json.extract! user_drink, :id, :user_id, :cocktail_id, :created_at, :updated_at
json.url user_drink_url(user_drink, format: :json)
