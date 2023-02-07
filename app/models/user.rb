class User < ApplicationRecord
    has_many :user_lists
    has_many :concerts, through: :user_lists
    has_many :posts
    has_many :concerts, through: :posts
    
    has_secure_password

    validates :email, :username, :password, presence: true
    validates :email, :username, uniqueness: true

    def password=(new_password)
        salt = BCrypt::Engine::generate_salt
        self.password_digest = BCrypt::Engine::hash_secret(new_password, salt)
    end

    def authenticate(password)
        salt = password_digest[0..28]
        return nil unless BCrypt::Engine::hash_secret(password, salt) == self.password_digest
        self
    end
end
