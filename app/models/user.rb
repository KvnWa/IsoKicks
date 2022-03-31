class User < ApplicationRecord
    has_secure_password
    has_many :cart_items

    validates :username, presence: true, uniqueness: true
    validates :password, length: {minimum: 3}
    validates :password_digest, presence: true

end
