class V1::UsersController < ActionController::Base
    skip_before_action :verify_authenticity_token
    
    def create
        @user = User.new(user_params)
        if @user.valid? 
            @user.save
            auth_token = AuthenticateUser.new(user.email, user.password).call
            response = { message: Message.account_created, auth_token: auth_token }
            render json: response, status: 200
        else
            render json: {error: @user.errors}, status: 200 
        end
       
    end


    private

    def user_params
        params.require(:user).permit(:name, :password_digest)
    end
end