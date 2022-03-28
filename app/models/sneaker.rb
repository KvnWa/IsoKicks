class Sneaker < ApplicationRecord

    validates :brand, :title, :price, presence: true


    has_many :listings
end
