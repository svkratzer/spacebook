class CreateReacts < ActiveRecord::Migration[5.2]
  def change
    create_table :reacts do |t|
      t.string :emoji_type, null: false
      t.integer :user_id, null: false
      t.integer :reactable_id
      t.integer :reactable_type

      t.timestamps
    end
  end
end
