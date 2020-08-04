class CreateFriendsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.integer :friend_a_id, null: false
      t.integer :friend_b_id, null: false
    end
    
  end
end
