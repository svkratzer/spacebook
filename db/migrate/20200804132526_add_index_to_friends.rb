class AddIndexToFriends < ActiveRecord::Migration[5.2]
  def change
    add_index :friends, :friend_a_id
    add_index :friends, :friend_b_id
  end
end
