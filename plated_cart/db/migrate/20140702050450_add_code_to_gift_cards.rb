class AddCodeToGiftCards < ActiveRecord::Migration
  def change
    add_column :gift_cards, :code, :string
  end
end
