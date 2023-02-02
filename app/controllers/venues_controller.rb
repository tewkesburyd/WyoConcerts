class VenuesController < ApplicationController
skip_before_action :authorize, only: [:index, :show]
  # GET /venues
  def index
    render json: Venue.all
  end

  # GET /venues/1
  def show
    render json: @venue
  end

  # POST /venues
  def create
    @venue = Venue.Create!(venue_params)
    render json: @venue, status: :created
  end

  # PATCH/PUT /venues/1
  def update
    @venue.update!(venue_params)
    render json: @venue, status: :accepted
  end

  # DELETE /venues/1
  def destroy
    @venue.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_venue
      @venue = Venue.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def venue_params
      params.permit(:name, :address, :city, :zip, :state, :description, :website)
    end
end
