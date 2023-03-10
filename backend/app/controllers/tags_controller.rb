class TagsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_tag
protect_from_forgery with: :null_session
skip_before_action :authorize
skip_before_action :verify_authenticity_token

    def index
        tag = Tag.all
        render json: tag, status: :ok
    end

    def show
        tag = Tag.find(params[:id])
        render json: tag, status: :ok
    end
end
