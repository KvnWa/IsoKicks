class Listing < ApplicationRecord

  validates :sneaker_id, :size, presence: true
  belongs_to :sneaker
  has_one :cart_item
end
