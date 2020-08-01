class AddIndexToPostsForeignKeys < ActiveRecord::Migration[5.2]
  def change
    add_index :posts, :author_id
    add_index :posts, :wall_id
  end
end
