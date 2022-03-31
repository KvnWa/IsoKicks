class Sneaker < ApplicationRecord

    validates :brand, :title, :price, :imageone, presence: true


    has_many :cart_items
    has_many :users, through: :cart_items
end
