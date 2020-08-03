class Api::PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @posts = current_user.wall_posts
      .order("posts.created_at DESC")
    render :index
  end

  def show 
    @post = Post.find_by(id: params[:id])
    render :show
  end

  def create 
    # debugger
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
  @post = Post.find_by(params[:id])
    @post.destroy
    render :show
  end

  private
  def post_params
    # The wall_id is taken from the front_end route
    params.require(:post).permit(:body, :photo_url, :wall_id, :author_id)
  end
end
