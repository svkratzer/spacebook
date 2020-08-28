class Api::PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @user = User.find_by(id: params[:user_id])

    if params[:index_type] == "wall"
      @posts = @user
        .wall_posts
        .order("posts.created_at DESC")
        .page(params[:page]).per(3)
    elsif params[:index_type] == "newsfeed"
      ids = @user.friends
      @user_posts = @user.posts.order("posts.created_at DESC").page(params[:page]).per(3)
      @friend_posts = @user.friend_posts.order("posts.created_at DESC").page(params[:page]).per(3)
      @posts = (@user_posts + @friend_posts)
    end
    render :index
  end

  def show 
    @post = Post.find_by(id: params[:id])
    render :show
  end

  def create 
    @post = Post.new(post_params)
    if @post.save 
      render :show
    else 
      render json: @post.errors.full_messages
    end
  end

  def update 
    @post = Post.find_by(id: params[:id])
    if @post.update(post_params)
      render :show
    else 
      render json: @post.errors.full_messages
    end
  end

  def destroy      
  @post = Post.find_by(id: params[:id])
    @post.destroy
    render :show
  end

  private
  def post_params
    # The wall_id is taken from the front_end route
    params.require(:post).permit(:body, :photo_url, :wall_id, :author_id)
  end
end
