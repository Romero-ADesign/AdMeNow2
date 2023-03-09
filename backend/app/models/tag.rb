class Tag < ApplicationRecord
    has_many :ads, dependent: :destroy
    has_many :users, through: :ads

    validates :name, presence: true
end
