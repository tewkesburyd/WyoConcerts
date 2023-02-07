class UserList < ApplicationRecord
  belongs_to :user
  belongs_to :concert

  validates :user_id, :concert_id, presence: true
  validates :concert_id, uniqueness: { scope: :user_id }
end
