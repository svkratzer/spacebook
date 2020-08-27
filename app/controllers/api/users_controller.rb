class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  # before_action :ensure_logged_in, only: [:show, :update]

  def create
    @user = User.create(user_params)
    
    if @user.save
      
      # LOGIN NEW USER
      login!(@user)

      if @user.first_name == "Nick" && @user.last_name == "Cage"
        # CREATE FRIENDS FOR THE DEMO USER
        ongo = User.find_by(last_name: "Gablogian")
        
        Friend.create(friend_a_id: @user.id, friend_b_id: ongo.id)
        computer = User.find_by(last_name: "Computer")
        
        Friend.create(friend_a_id: @user.id, friend_b_id: computer.id)
        meeseeks = User.find_by(last_name: "Meeseeks")
        
        Friend.create(friend_a_id: @user.id, friend_b_id: meeseeks.id)
        shia = User.find_by(last_name: "LaBoeuf")
        
        Friend.create(friend_a_id: @user.id, friend_b_id: shia.id)
        
      end

      render :show
    else
      debugger
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def index 
    filter = "%#{params[:name]}%"
    @users = User.select("*").where("UPPER(CONCAT(first_name, ' ', last_name)) LIKE UPPER(?)", filter).limit(8)
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
      render :show
    end
  end

  private
  def create_friends(i, j)
    Friend.create(friend_a_id: i, friend_b_id: j)
  end

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
