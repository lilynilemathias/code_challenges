# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


unless Recipe.any?
  Recipe.create(:name => 'Pasta Carbonara', :inventory_available => 10)
  Recipe.create(:name => 'Steak and Potatoes', :inventory_available => 8)
  Recipe.create(:name => 'Tacos', :inventory_available => 14)
end

unless GiftCard.any?
  GiftCard.create(:name => '$60 gift card', :amount => 60)
  GiftCard.create(:name => '$120 gift card', :amount => 120)
  GiftCard.create(:name => '$180 gift card', :amount => 180)
end