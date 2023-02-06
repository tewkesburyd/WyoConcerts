class ConcertsController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]
  before_action :set_concert, except: :index

  # GET /concerts
  def index
    render json: Concert.all
  end

  # GET /concerts/1
  def show
    render json: @concert
  end

  # POST /concerts
  def create
    @concert = Concert.create!(concert_params)
    render json: @concert, status: :created

  end

  # PATCH/PUT /concerts/1
  def update
    @concert.update!(concert_params)
    render json: @concert, status: :accepted
  end

  # DELETE /concerts/1
  def destroy
    @concert.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_concert
      @concert = Concert.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def concert_params
      params.permit(:date, :name, :price, :website, :venue_id, :image)
    end
end
