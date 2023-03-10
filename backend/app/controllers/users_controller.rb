# class UsersController < ApplicationController
# rescue_from ActiveRecord::RecordInvalid, with: :invalid_user
# protect_from_forgery with: :null_session

#     def index
#         user = User.all
#         render json: user, status: :ok
#     end

#     def show
#         user = User.find(params[:id])
#         render json: user, status: :ok
#     end

#     def create
#         newuser = User.create!(user_params)
#         if params[:user][:profile_picture].present?
#             newuser.profile_picture.attach(params[:user][:profile_picture])
#         end
#         if newuser.save
#             render json: newuser, status: :created
#         else
#             render json: {errors: error.message}, status: 422
#         end
#     end


#     private

#     def user_params
#         params.permit(:name, :password, :phone_number, :email_address, :state)
#     end

#     def invalid_user(error)
#         render json: { errors: error.message}, status: 422
#     end
# end
class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    
        def create
            # byebug
            user = User.create!(user_params)
            session[:user_id] = user.id
    
            render json: user, status: :created
        end
    
        def show
            render json: @current_user 
            #show me who the current user is 
        end
    
        private
    
        def user_params
            params.permit(:username, :password, :password_confirmation, :image_url, :bio)
        end
    end