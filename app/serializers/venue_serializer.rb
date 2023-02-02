class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :zip, :state, :description, :website
end
