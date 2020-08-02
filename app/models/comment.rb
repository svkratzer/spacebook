class Comment < ApplicationRecord
  validates :body, :author_id, presence: true

  belongs_to :author, 
    foreign_key: :author_id, 
    class_name: :User

  belongs_to :post, 
    foreign_key: :post_id, 
    class_name: :Post
  
  has_one :wall, 
    through: :post, 
    source: :wall

  belongs_to :parent_comment, 
    foreign_key: :parent_comment_id, 
    optional: true, 
    class_name: :Comment
  
  has_many :children, 
    foreign_key: :parent_comment_id, 
    class_name: :Comment, 
    dependent: :destroy

  has_one :post_author, 
    through: :post, 
    source: :author

  has_many :reacts, as: :reactable
end
