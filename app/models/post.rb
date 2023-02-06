class Post < ApplicationRecord
  belongs_to :user
  belongs_to :concert

  validates :concert_id, :message, presence: true
end
