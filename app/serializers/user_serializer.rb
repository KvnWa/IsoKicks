class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :address, :email
end
