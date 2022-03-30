class CartItemSerializer < ActiveModel::Serializer
  attributes :sneaker_id, :user_id, :size, :id
  has_one :user
  has_one :sneaker
end
