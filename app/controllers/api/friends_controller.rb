class Api::FriendsController < ApplicationController
  
  def index
    if params[:index_type] === "friends"
      @friends = 7
    elsif params[:index_type] === "suggested_friends"
      @friends = 7
    end
    render :index
  end

  def create
    @friendship1 = Friend.new(friend_params)

    friend_a_id = @friendship1.friend_a_id
    friend_b_id = @friendship1.friend_b_id
    @friendship2 = Friend.new(friend_b_id, friend_a_id)

    if @friendship1.save && @friendship2.save
      @friend = User.find_by(id: @friendship1.friend_b_id)
      render :show
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def destroy
    @friendship1 = Friend.find_by(id: params[:id])
    @friendship2 = Friend.find_by(friend_b_id: @friendship1.friend_b_id)
    @friendship1.destroy
    @friendship2.destroy
  end

  private
  def friend_params
    params.require(:friend).permit(:friend_a_id, :friend_b_id)
  end 
end
