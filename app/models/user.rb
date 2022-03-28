class User < ApplicationRecord
    has_secure_password
    has_many :cart_items

    validates :email, presence: true, uniqueness: true
    validates :password, length: (minimum: 3), allow_nil: true
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    
end
