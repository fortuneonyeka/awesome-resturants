class RestaurantsController < ApplicationController

  def index
    @restaurants = Resturant.all
    render :json {
      restaurants: @restaurants
    }, status: 200
  end 

  def show
    @restaurant = Resturant.find(params[:id])
    render :json {
      restaurant: @restaurant
    }, status: 200
  end 

end
