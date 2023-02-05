class UserListSerializer < ActiveModel::Serializer
  attributes :id, :concert
  has_one :user
  has_one :concert
end
