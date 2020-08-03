class Api::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @post = Post.find_by(post_id: params[:post_id])
    @comments = @post.comments.order("comments.created_at DESC")
    render :index
  end

  def show
    @comment = Comment.find_by(id: params[:id])
    render :show
  end

  def create 
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save
      render :show
    else 
      render json: @comment.errors.full_messages  
    end
  end

  def update 
    @comment = Comment.find_by(id: params[:id])
    if @comment.update(comment_params)
      render :show
    else 
      render json: @comment.errors.full_messages
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy
    render :show
  end  

  private
  def comment_params
      params.require(:comment).permit(:body, :author_id, :post_id, :parent_comment_id)
  end
end
