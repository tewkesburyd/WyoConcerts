class Venue < ApplicationRecord
    has_many :concerts
    
    validates :name, presence: true, uniqueness: true
end
