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

    def create
        ad = Ad.new(ad_params)
      
        if ad.save
            redirect_to ad, notice: 'Ad was successfully created.'
          else
            render json: { errors: @error }, status: 422
          end
        end

    def by_user
        ads = Ad.where(user_id: params[:user_id])
        render json: ads
    end

    private

    def ad_params
        params.require(:ad).permit(:name, :description, :image, :price, :tag_id)
    end

    def invalid_ad
        @error = "Invalid ad parameters"
        render json: { errors: @error }, status: 422
      end
end
