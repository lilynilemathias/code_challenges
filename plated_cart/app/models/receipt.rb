class Receipt < ActiveRecord::Base
  validates_uniqueness_of :cookie_id
end