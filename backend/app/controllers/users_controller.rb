class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_user
protect_from_forgery with: :null_session

    def index
        user = User.all
        render json: user, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def create
        newuser = User.create!(user_params)
        if params[:user][:profile_picture].present?
            newuser.profile_picture.attach(params[:user][:profile_picture])
        end
        if newuser.save
            render json: newuser, status: :created
        else
            render json: {errors: error.message}, status: 422
        end
    end


    private

    def user_params
        params.permit(:name, :password, :phone_number, :email_address, :state)
    end

    def invalid_user(error)
        render json: { errors: error.message}, status: 422
    end
end
