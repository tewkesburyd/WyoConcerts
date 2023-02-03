class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :date, :name, :price, :website
  
  has_one :venue
end
