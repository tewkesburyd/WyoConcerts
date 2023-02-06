class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :promotion_interest, :user_lists, :concerts, :username
end
