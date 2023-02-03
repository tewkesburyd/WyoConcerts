class Concert < ApplicationRecord
  belongs_to :venue
  has_many :user_lists
  has_many :users, through: :user_lists

  validates :name, :date, :venue_id, presence: true
end
