require 'sinatra/base'

class LoginPage < Sinatra::Base
	set :public_folder, File.dirname(__FILE__) + '/public'

	get('/') do
		erb :index
	end

	post('/login') do
		if check_auth(params[:email], params[:password])
			[200, "Successfully Logged In!"]
		else
			[400, "Try Again"]
		end
	end

	def check_auth(email, password)
		user = User.find_by(email: email)
		if user && password == user.password
			return true
		end
	end
end