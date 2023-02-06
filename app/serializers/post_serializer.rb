class PostSerializer < ActiveModel::Serializer
  attributes :id, :message, :created_at, :user
  has_one :user
  has_one :concert
end
