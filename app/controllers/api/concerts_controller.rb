class Api::ConcertsController < ApplicationController
  skip_before_action :authorize, only: [:index, :show, :freeConcerts]
  before_action :set_concert, except: [:index, :freeConcerts, :create]

  # GET /concerts
  def index
    # concert = Concert.all
    concert = Concert.order(date: :asc)
    render json: concert
  end

  def freeConcerts
    concerts = Concert.where(price: "free")
    orderedConcerts = concerts.order(date: :asc)
    render json: orderedConcerts
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
      params.permit(:date, :name, :price, :website, :venue_id, :image, :description)
    end
end
