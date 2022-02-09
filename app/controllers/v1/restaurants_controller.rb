class V1::RestaurantsController < ApplicationController
  skip_before_action :authorize_request

  def index
    @restaurants = Resturant.all
    render json: {
      restaurants: @restaurants
    }, status: 200
  end

end
