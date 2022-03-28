class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :address, :username
end
