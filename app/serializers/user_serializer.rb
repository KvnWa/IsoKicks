class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :price_total

  has_many :sneakers, through: :cart_items

  def price_total
    self.object.sneakers.sum(:price)
  end
end
