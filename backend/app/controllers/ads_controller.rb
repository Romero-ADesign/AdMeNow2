class AdsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_ad
protect_from_forgery with: :null_session

    def index 
        ad = Ad.all
        render json: ad, status: :ok
    end

    def show
        ad = Ad.find(params[:id])
        render json: ad, status: :ok
    end

    private

    def invalid_ad
        render json: { errors: error.message}, status: 422
    end
end
