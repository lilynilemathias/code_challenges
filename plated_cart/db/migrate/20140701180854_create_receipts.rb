class CreateReceipts < ActiveRecord::Migration
  def change
    create_table :receipts do |t|
      t.string :purchase
    end
  end
end
