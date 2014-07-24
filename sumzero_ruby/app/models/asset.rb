class Asset < ActiveRecord::Base
	has_many :positions
	has_many :asset_symbols
end
