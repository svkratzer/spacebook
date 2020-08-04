class Friend < ApplicationRecord
  belongs_to :user,
    foreign_key: :friend_a_id,
    class_name: :User
end
