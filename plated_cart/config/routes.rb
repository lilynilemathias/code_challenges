MyCart::Application.routes.draw do

  root 'pages#home'
  post '/add_to_cart' => 'pages#add_to_cart'
  post '/remove_from_cart' => 'pages#remove_from_cart'
  post '/redeem_gift_card' => 'pages#redeem_gift_card'
  get '/checkout_cart' => 'pages#checkout_cart'

end
