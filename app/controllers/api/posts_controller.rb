class Api::PostsController < ApplicationController
  before_action :set_post, only: %i[ show update destroy ]

  # GET /posts
  def index
    @posts = Post.all.order(created_at: :asc)

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = @current_user.posts.create!(post_params)
    render json: @post, status: :created
  end

  # PATCH/PUT /posts/1
  def update
    if @post.user == @current_user
      @post.update!(post_params)
      render json: @post, status: :accepted
    else 
      render json: {error: "Error"}
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.permit(:concert_id, :message)
    end
end
