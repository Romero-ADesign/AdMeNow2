class Ad < ApplicationRecord
    belongs_to :user
    belongs_to :tag

    validates :name, presence: true
    validates :description, presence: true, length: { in: 5..250, message: "Description must be at least 5 characters long, 250 characters maximum." }
    validates :image, presence: true
    validates :price, presence: true
end
