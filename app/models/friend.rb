class Friend < ApplicationRecord
  validates :friend_a_id, uniqueness: { scope: :friend_b_id }
  validates :friend_b_id, uniqueness: { scope: :friend_a_id }
  
  belongs_to :friend,
    foreign_key: :friend_b_id,
    class_name: :User
  
  belongs_to :user,
    foreign_key: :friend_a_id,
    class_name: :User

end
