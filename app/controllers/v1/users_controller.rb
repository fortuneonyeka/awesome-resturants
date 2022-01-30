class V1::UsersController < ActionController::Base
    skip_before_action :verify_authenticity_token
    
    def create
        @user = User.new(user_params)
        if @user.valid? 
            @user.save
            render json: {message: "User #{@user.name} has been created", session: true}, status: 200
        else
            render json: {error: @user.errors}, status: 200 
        end
    end
    def login
        @userSearch = User.where(user_params)
        if(@userSearch.length === 0)
            render json: {error: 'either the username or the password are wrong'}, status: 400
        else
            render json: {message: "User #{@userSearch[0].name} successfully logged in", session: true}, status: 200
        end

    end
    def logout
        render json: {message: 'Successfully logged out', session: false} , status: 200
    end

    private

    def user_params
        params.require(:user).permit(:name, :password_digest)
    end
end