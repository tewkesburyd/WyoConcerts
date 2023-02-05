class UserListsController < ApplicationController
  before_action :set_user_list, only: %i[ show update destroy ]

  # GET /user_lists
  def index
    @user_lists = UserList.all

    render json: @user_lists
  end

  # GET /user_lists/1
  def show
    @user_lists.concert
    render json: @user_list
  end

  # POST /user_lists
  def create
    @user_list = @current_user.user_lists.create!(user_list_params)
    render json: @user_list, status: :created
  end

  # PATCH/PUT /user_lists/1
  def update
    @user_list.update!(user_list_params)
    render json: @user_list, status: :accepted
  end

  # DELETE /user_lists/1
  def destroy
    @user_list.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_list
      @user_list = UserList.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_list_params
      params.permit(:concert_id)
    end
end
