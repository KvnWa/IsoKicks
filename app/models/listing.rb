class Listing < ApplicationRecord
  belongs_to :sneaker
  has_one :cart_item
end
