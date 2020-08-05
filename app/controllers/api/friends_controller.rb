class Api::FriendsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    user = User.find_by(id: params[:user_id])
    if params[:index_type] == "friends"
      @friendships = user.friendships
    # elsif params[:index_type] === "suggested_friends"
    #   @friendships = 7
    else
      @friendships = []
    end
    render :index
  end

  def create
    @friendship1 = Friend.new(friend_params)
  
    ida = @friendship1.friend_a_id
    idb = @friendship1.friend_b_id
    new_friend_params = {friend_a_id: idb, friend_b_id: ida}

    @friendship2 = Friend.new(new_friend_params);
   
    if @friendship1.save && @friendship2.save
      @friend = User.find_by(id: @friendship1.friend_a_id)
      
      render :show
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def destroy
    @friendship1 = Friend.find_by(id: params[:id])
    @friendship2 = Friend.select("*").where(friend_a_id: @friendship1.friend_b_id).find_by(friend_b_id: @friendship1.friend_a_id)
    
    
    @friendship1.destroy
    @friendship2.destroy
  end

  private
  def friend_params
    params.require(:friend).permit(:friend_a_id, :friend_b_id)
  end 
end
