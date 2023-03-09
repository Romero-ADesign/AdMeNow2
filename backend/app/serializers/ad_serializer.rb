class AdSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :tag_id, :name, :description, :image, :price
end
