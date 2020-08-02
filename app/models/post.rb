class Post < ApplicationRecord
    validates :body, presence: true

    belongs_to :author, 
      foreign_key: :author_id, 
      class_name: :User

    belongs_to :wall, 
      foreign_key: :wall_id, 
      class_name: :User

    has_many :comments, 
      foreign_key: :post_id, 
      class_name: :Comment, 
      dependent: :destroy

    has_many :reactions, as: :reactable

end
