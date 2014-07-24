class AddCookieIdToReceipts < ActiveRecord::Migration
  def change
    add_column :receipts, :cookie_id, :string
  end
end
