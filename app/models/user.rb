class User < ApplicationRecord
    has_secure_password

    validates :name, uniqueness: true, length: { in: 2...20 }
    validates :password_digest, length: { minimum: 2}
end
