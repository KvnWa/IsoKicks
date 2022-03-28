class SneakerSerializer < ActiveModel::Serializer
  attributes :id, :brand, :title, :price, :imageone, :imagetwo, :imagethree
end
