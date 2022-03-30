class Sneaker < ApplicationRecord

    validates :brand, :title, :price, :imageone, presence: true


    has_many :cart_items
end
