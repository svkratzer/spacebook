class ChangeGenderCol < ActiveRecord::Migration[5.2]
  change_column :users, :gender, :string, null: true
end
