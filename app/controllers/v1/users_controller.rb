class V1::UsersController < ActionController::Base
    skip_before_action :verify_authenticity_token
    def create
        @user = User.new(user_params)
        if @user.valid? 
            @user.save
            render json: {message: 'User has been created'}, status: 200
        else
            render json: {error: @user.errors}, status: 200 
        end
    end
    def login

    end
    def logout

    end

    private

    def user_params
        params.require(:user).permit(:name, :password)
    end
end