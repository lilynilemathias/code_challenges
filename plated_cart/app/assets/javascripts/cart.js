$(document).ready(function(){
  startNewCart();
});

function startNewCart(){
  $.ajax({
    method: 'GET',
    dataType: 'JSON',
    url: '/'
  }).done(function(data){
    appendCartItems(data);
  });
}

function appendCartItems(cart) {
  var cartList = $('#cart');
  cartList.empty();
  for (var item in cart) {
    var itemString = item.split(' ').join('_');
    var quantitySelect = $('<select>').attr('id', itemString);
    for (var i = 0; i <= cart[item]; i++){
      var optionNumber = $('<option>').attr('value', i).text(i);
      quantitySelect.append(optionNumber);
    }

    var cartItem = $('<li>').text(cart[item] + ': ' + item).addClass('cart-item');
    var removeLink = $('<a>').attr('href', '#').attr('onClick', "removeFromCart(" + "'" + itemString + "'" + ")").text("Remove").addClass('remove-link');

    cartList.append(cartItem);
    cartItem.append(quantitySelect);
    cartItem.append(removeLink);
  }
  calculateTotalPrice(cart);
}

function addToCart(type, id, name) {
  var quantity = $('#' + id + '-' + type + '-quantity').val();
  $.ajax({
    method: 'POST',
    dataType: 'JSON',
    url: '/add_to_cart',
    data: {
      item_name: name,
      item_count: quantity
    }
  }).done(function(data){
    alert(quantity + " " + name + " added to Cart!");
    appendCartItems(data);
  });
}

function calculateTotalPrice(cart) {
  var totalPrice = $('#total-price');
  var count = 0;
  for (var item in cart){
    if (item.indexOf('gift') == -1) {
      count += (cart[item] * 15);
    } else {
      var giftCardAmount = item.split(' ')[0].slice(1, 4);
      count += (cart[item] * parseInt(giftCardAmount));
    }
  }
  totalPrice.text('Total Price: $' + count.toFixed(2));
}

function removeFromCart(cartItem){
  var quantity = document.getElementById(cartItem).value; //using Javascript since $ sign for jQuery was bugging out for gift cards
  cartItem = cartItem.split("_").join(" ");
  $.ajax({
    method: 'POST',
    dataType: 'JSON',
    url: '/remove_from_cart',
    data: {
      item_name: cartItem,
      item_count: quantity
    }
  }).done(function(data){
    alert(quantity + " '" + cartItem + "' removed from Cart!");
    appendCartItems(data);
  });
}

function checkoutCart() {
  $.ajax({
    method: 'GET',
    dataType: 'JSON',
    url: '/checkout_cart'
  }).done(function(data){
    var messages = $('#checkout-message');
    messages.empty();
    for(var i = 0; i < data.length; i++){
      var newMessage = $('<li>').text(data[i]);
      messages.append(newMessage);
    }
    startNewCart();
  });
}

function redeemGiftCard(){
  $.ajax({
    method: 'POST',
    dataType: 'JSON',
    url: '/redeem_gift_card',
    data: {
      gift_card_code: $('#gift_card_code').val()
    }
  }).done(function(data){
    var messages = $('#checkout-message');
    messages.empty();
    var newMessage = $('<li>').text(data.message);
    messages.append(newMessage);
    $('#gift_card_code').val("");
    $('#gift_card_code').focus();
  });
}
