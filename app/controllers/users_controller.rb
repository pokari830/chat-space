class UsersController < ApplicationController
  # before_action :set_user, only: [:edit, :show, :update]

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      edit
    end
  end

  def show
  end

  private
  def user_params
    params.require(:user).permit(params[:name, :email])
  end

  # def set_user
  #   @user = User.find(params[:id])
  # end
end
