class User < ApplicationRecord
    has_one_attached :profile_picture
    has_many :ads
    has_many :tags, through: :ads

    has_secure_password

    
end
