# class UserDrinksController < ApplicationController
#   before_action :set_user_drink, only: %i[ show update destroy ]

#   # GET /user_drinks
#   # GET /user_drinks.json
#   def index
#     @user_drinks = UserDrink.all
#   end

#   # GET /user_drinks/1
#   # GET /user_drinks/1.json
#   def show
#   end

#   # POST /user_drinks
#   # POST /user_drinks.json
#   def create
#     @user_drink = UserDrink.new(user_drink_params)

#     if @user_drink.save
#       render :show, status: :created, location: @user_drink
#     else
#       render json: @user_drink.errors, status: :unprocessable_entity
#     end
#   end

#   # PATCH/PUT /user_drinks/1
#   # PATCH/PUT /user_drinks/1.json
#   def update
#     if @user_drink.update(user_drink_params)
#       render :show, status: :ok, location: @user_drink
#     else
#       render json: @user_drink.errors, status: :unprocessable_entity
#     end
#   end

#   # DELETE /user_drinks/1
#   # DELETE /user_drinks/1.json
#   def destroy
#     @user_drink.destroy
#   end

#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_user_drink
#       @user_drink = UserDrink.find(params[:id])
#     end

#     # Only allow a list of trusted parameters through.
#     def user_drink_params
#       params.require(:user_drink).permit(:user_id, :cocktail_id)
#     end
# end
