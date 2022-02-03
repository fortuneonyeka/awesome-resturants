class Resturant < ApplicationRecord
  has_many :reservations, dependent: :destroy

  validates :name, presence: true
  validates :image, presence: true
  validates :location, presence: true
  validates :rating, presence: true
end
