class TagsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_tag
protect_from_forgery with: :null_session

    def index
        tag = Tag.all
        render json: tag, status: :ok
    end

    def show
        tag = Tag.find(params[:id])
        render json: tag, status: :ok
    end
end
