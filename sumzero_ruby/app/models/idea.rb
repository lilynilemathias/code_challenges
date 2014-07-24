class Idea < ActiveRecord::Base
	has_many :comments
	has_many :positions
	belongs_to :user

	def bloomberg_symbol
		positions.where(benchmark: false).first.asset.asset_symbols.where(status: AssetSymbol::ACTIVE).where(source: AssetSymbol::BLOOMBERG).first.symbol
	end

	def yahoo_symbol
		positions.where(benchmark: false).first.asset.asset_symbols.where(status: AssetSymbol::ACTIVE).where(source: AssetSymbol::YAHOO).first.symbol
	end
end
	