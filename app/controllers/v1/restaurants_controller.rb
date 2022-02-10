class V1::RestaurantsController < ApplicationController
  skip_before_action :authorize_request

  def index
    @restaurants = Resturant.all
    render json: {
      restaurants: @restaurants
    }, status: 200
  end

  def create
    @restaurant = Resturant.new( restaurant_params )

    if @restaurant.save
      render json: {message: "Restaurant has been created"}, status: 200
    else
      render json: {errors: @restaurant.errors}, status: 422
    end
  end
  
  private
  
  def restaurant_params
    params.require(:restaurant).permit(:name, :description, :rating, :image, :location)
  end

end

