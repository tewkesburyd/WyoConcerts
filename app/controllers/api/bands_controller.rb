class Api::BandsController < ApplicationController
  # skip_before_action :authorize, only: [:index, :show]
  # # GET /bands
  # def index
  #   render json: Band.all
  # end

  # # GET /bands/1
  # def show
  #   render json: @band
  # end

  # # POST /bands
  # def create
  #   @band = Band.create!(band_params)
  #   render json: @band
  # end

  # # PATCH/PUT /bands/1
  # def update
  #   @band.update!(band_params)
  #     render json: @band, status: :accpeted
  # end

  # # DELETE /bands/1
  # def destroy
  #   @band.destroy
  #   head :no_content
  # end

  # private
  #   # Use callbacks to share common setup or constraints between actions.
  #   def set_band
  #     @band = Band.find(params[:id])
  #   end

  #   # Only allow a list of trusted parameters through.
  #   def band_params
  #     params.permit(:name, :category)
  #   end
end
