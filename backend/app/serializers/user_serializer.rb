class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone_number, :email_address, :state
end
