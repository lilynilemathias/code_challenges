class CreateGiftCards < ActiveRecord::Migration
  def change
    create_table :gift_cards do |t|
      t.string :name
      t.decimal :amount

      t.timestamps
    end
  end
end
