require 'spec_helper'

RSpec.describe Idea, :type => :model do

	context "factory" do
		#Note: included for example only, factories are automatically linted in spec_helper
		it "creates an idea" do
			expect(build(:idea_with_positions)).to be_valid
		end
	end

	#implement these
	context "#bloomberg_symbol" do
		#see https://github.com/thoughtbot/factory_girl/blob/master/GETTING_STARTED.md
		#for how to use FactoryGirl.
		it "returns the correct bloomberg symbol for this idea" do
			expect(build(:idea).bloomberg_symbol).to be_valid
		end
	end

	context "#yahoo_symbol" do
		it "returns the correct yahoo symbol for this idea" do
			expect(build(:idea).yahoo_symbol).to be_valid
		end
	end
end
