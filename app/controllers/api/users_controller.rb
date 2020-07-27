class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :ensure_logged_in, only: [:show]

  def create
    @user = User.create(user_params)
    if @user.save!
      login!(user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
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
      :bio
    )
  end
end
