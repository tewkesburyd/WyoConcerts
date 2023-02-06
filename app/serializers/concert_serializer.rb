class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :date, :name, :price, :website, :image, :posts
  
  has_one :venue
  has_many :posts
end
