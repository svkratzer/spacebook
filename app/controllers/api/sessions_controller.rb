class Api::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login!(@user)
      redirect_to api_user_url(@user)
    else
      render json: ['Oops! Invalid email or password. Please, try again.'], status: 401
    end
  end

  def destroy
    if current_user
      logout!
    else
      render json: ['You\'re already logged out, ya \'lil peanut!'], status: 403
    end
  end
end