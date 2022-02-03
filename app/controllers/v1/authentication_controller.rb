class V1::AuthenticationController < ApplicationController
  skip_before_action :authorize_request

  # return auth token once user is authenticated
  def authenticate
    auth_token =
      AuthenticateUser.new(auth_params[:name], auth_params[:password_digest]).call
    render json: { message: 'Successfully signed up', auth_token: auth_token }, status: 200
  end

  private

  def auth_params
    params.require(:user).permit(:name, :password_digest)
  end
end
