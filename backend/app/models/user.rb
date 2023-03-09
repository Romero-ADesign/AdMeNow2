class User < ApplicationRecord
    has_many :ads
    has_many :tags, through: :ads

    validates :name, presence: true
    validates :password, presence: true, length: { in: 5..18 }
    validates :phone_number, presence: true, length:{ is: 12 }, unless: ->(user) { user.email_address.present?}
    validates :email_address, presence: true, unless: ->(user) { user.phone_number.present?}
    validates :state, presence: true
end
