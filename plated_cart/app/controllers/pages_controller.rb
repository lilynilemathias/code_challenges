class PagesController < ApplicationController

  def home
    @recipes = Recipe.all
    @gift_cards = GiftCard.where(code: nil)
    if session[:cart].nil?
      session[:cart] = {}
      session[:id] = generate_code
    end

    cart = session[:cart]
    respond_to do |format|
      format.html { render 'home.html.erb'}
      format.json { render json: cart}
    end
  end

  def add_to_cart
    cart = session[:cart]
    if cart[params[:item_name]]
      new_value = params[:item_count].to_i + cart[params[:item_name]]
      cart[params[:item_name]] = new_value
    else
      cart[params[:item_name]] = params[:item_count].to_i
    end

    respond_to do |format|
      format.json { render json: cart }
    end
  end

  def remove_from_cart
    cart = session[:cart]
    cart[params[:item_name]] -= params[:item_count].to_i
    cart.delete_if {|item, count| count == 0}

    respond_to do |format|
      format.json { render json: cart }
    end
  end

  def checkout_cart
    cart = separate_cart
    return_msgs = validate_cart(cart)

    if return_msgs.include?("Successfully checked out!")
      update_inventory(cart[:recipes])
      gift_card = GiftCard.find_by(name: cart[:gift_cards].keys.first)
      return_msgs = assign_card(gift_card, return_msgs) if gift_card
      Receipt.create(purchase: cart.to_s, cookie_id: session[:id])
      session[:cart], session[:id] = nil
    end

    respond_to do |format|
      format.json { render json: return_msgs }
    end
  end

  def separate_cart
    new_cart = { recipes: {}, gift_cards: {} }
    session[:cart].each do |item, count|
      Recipe.find_by(name: item) ? new_cart[:recipes][item] = count : new_cart[:gift_cards][item] = count
    end
    return new_cart
  end

  def validate_cart(cart)
    messages = []
    messages = check_gift_cards(cart[:gift_cards], messages)
    messages = check_recipes(cart[:recipes], messages)
    messages = check_inventory(cart[:recipes], messages)
    messages << "Successfully checked out!" if messages.size == 0
    return messages
  end

  def check_gift_cards(cards, msgs)
    msgs << "Only 1 gift card allowed per check out" if cards.values.reduce(:+) > 1
    return msgs
  end

  def check_recipes(recipes, msgs)
    recipes.each do |name, count|
      msgs << "Must have more than 1 '#{name}'" if count < 2
    end
    msgs << "Must have more than 4 recipes to check out" if recipes.values.reduce(:+) < 4
    return msgs
  end

  def check_inventory(recipes, msgs)
    recipes.each do |name, count|
      item = Recipe.find_by(name: name)
      msgs << "Not enough '#{name}' in the inventory" if item.inventory_available < count
    end
    return msgs
  end

  def update_inventory(foods)
    foods.each do |name, count|
      recipe = Recipe.find_by(name: name)
      recipe.inventory_available -= count
      recipe.save
    end
  end

  def assign_card(card, msgs)
    new_card = card.dup
    new_card.code = generate_code
    new_card.save
    msgs << "Gift Card Code: #{new_card.code}"
    return msgs
  end

  def generate_code
    result = ''
    random_array = []
    (0..50).to_a.each {|x| random_array << x}
    ('A'..'Z').to_a.each {|y| random_array << y}
    ('a'..'z').to_a.each {|z| random_array << z}
    random_array.sample(20).each {|r| result += r.to_s}
    return result
  end

  def redeem_gift_card
    gift_card = GiftCard.find_by(code: params[:gift_card_code])
    if gift_card
      message = "Redeemed #{gift_card.name}!"
      gift_card.delete
    else
      message = "Seems like that gift card has already been used or doesn't exist!"
    end

    respond_to do |format|
      format.json { render json: {message: message} }
    end
  end

end