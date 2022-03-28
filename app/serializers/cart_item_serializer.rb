class CartItemSerializer < ActiveModel::Serializer
  attributes 
  has_one :user
  has_one :listing
end
