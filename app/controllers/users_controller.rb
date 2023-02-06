class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :index]
  before_action :set_user, only: [:update, :destroy]

  # GET /users
  def index
    render json: User.all
  end

  # GET /users/1
  def show
    render json: @current_user
  end

  # POST /users
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user
  end

  # PATCH/PUT /users/1
  def update
    @user.update!(user_params)
    render json: @user, status: :accepted
  end

  # DELETE /users/1
  def destroy
    @user.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:email, :password, :promotion_interest, :username)
    end
end
