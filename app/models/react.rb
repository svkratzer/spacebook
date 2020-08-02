class React < ApplicationRecord
  validates :user_id, uniqueness: {scope: [:reactable_id, :reactable_type], 
    message: "You can only react to this once."}

  belongs_to :user

  belongs_to :reactable, 
    polymorphic: true,
    foreign_key: :reactable_id
end
