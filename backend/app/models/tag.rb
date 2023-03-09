class Tag < ApplicationRecord
    has_many :ads
    has_many :users, through: :ads

    validates :name, presence: true
end
