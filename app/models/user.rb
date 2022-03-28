class User < ApplicationRecord
    validates :email, presence: true, uniqness: true
    validates :password, length: (minimum: 3), allow_nil: true
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqness: true

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :cart_items

  
end
