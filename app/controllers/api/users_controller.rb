class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  # before_action :ensure_logged_in, only: [:show, :update]

  def create
    @user = User.create(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def index 
    filter = "%#{params[:name]}%"
    @users = User.select("*").where("UPPER(CONCAT(first_name, ' ', last_name)) LIKE UPPER(?)", filter)
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
      render :show
    end
  end

  private
  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :email,
      :password,
      :birthday,
      :gender,
      :bio,
      :profile_url,
      :cover_url
    )
  end
end
