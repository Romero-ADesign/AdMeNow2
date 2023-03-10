class AdsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_ad
    skip_before_action :authorize
    skip_before_action :verify_authenticity_token

    def index 
        ad = Ad.all
        render json: ad, status: :ok
    end

    def show
        ad = Ad.find(params[:id])
        render json: ad, status: :ok
    end

    def create
        ad = Ad.create!(ad_params)
        render json: ad, status: :created
    end

    def update
        ad = Ad.find(params[:id])
        ad.update(ad_params)
        render json: ad, status: :created
    end

    private

    def ad_params
        params.permit(:tag_id, :user_id, :name, :description, :image, :price)
    end

    def invalid_ad
        render json: { errors: error.message}, status: 422
    end
end
