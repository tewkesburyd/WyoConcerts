class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :promotion_interest, :concerts
end
