class User < ApplicationRecord
    has_many :ads
    has_many :tags, through: :ads
end
