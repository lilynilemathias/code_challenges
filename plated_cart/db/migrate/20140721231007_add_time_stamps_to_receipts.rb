class AddTimeStampsToReceipts < ActiveRecord::Migration
  def change
    add_column :receipts, :created_at, :datetime
    add_column :receipts, :updated_at, :datetime
  end
end
