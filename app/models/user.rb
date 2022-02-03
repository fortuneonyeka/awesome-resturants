class User < ApplicationRecord
  has_secure_password

  has_many :todos, foreign_key: :created_by

  validates :name, uniqueness: true, length: { in: 2...20 }
  validates :password_digest, length: { minimum: 2 }
end
