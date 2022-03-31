class UsersController < ApplicationController
    
    skip_before_action :authorize, only: :create

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created
    end

    def show
        render json: @current_user 
    end

    def update
        @user.update(user_params)
        render json: @user
    end


    def destroy
        user = @user
        user.destroy
        head :no_content
    end


    private
    
    def user_params 
        params.permit(:first_name, :last_name, :username, :password)
    end
end