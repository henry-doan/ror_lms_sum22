class Course < ApplicationRecord

  vaildates :title, :desc, :ctype, presence: true
end
