class User < ApplicationRecord
    has_secure_password
    has_many :cart_items

    validates :username, presence: true, uniqueness: true
    validates :password, length: {minimum: 3}
    validates :password_digest, presence: true

    cattr_reader :current_password

  def update_with_password(user_params)
    current_password = user_params.delete(:current_password)

    if self.authenticate(current_password)
      self.update(user_params)
      true
    else
      self.errors.add(:current_password, current_password.blank? ? :blank : :invalid)
      false
    end
  end
end
    
end
