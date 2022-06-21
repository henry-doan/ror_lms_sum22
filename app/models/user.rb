class User < ApplicationRecord

  validates :first, :last, :image, presence: true
end
