class Enrollment < ApplicationRecord
  belongs_to :user
  belongs_to :course

  validates :role, presence: true
end
