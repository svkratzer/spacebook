class Api::ReactsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @react = React.new(react_params)
    if @react.save
      render :show
    else
      render json: @react.errors.full_messages, status: 422
    end
  end

  def update
    @react = React.new(react_params)
    if @react.save
      render :show 
    else
      render json: @react.errors.full_messages, status: 422
    end
  end

  def destroy
    @react = React.find_by(id: params[:id])
    @react.destroy
    render :show
  end

  private
  def react_params
    params.require(:react).permit(:reactable_id, :reactable_type, :emoji_type)
  end
end
