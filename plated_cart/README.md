### Plated Backend Developer Exercise

If you made it here, we like you so far. Let's do a coding excercise so we can see your style and your chops as a developer.
This app is a very lightweight.  It's a single page app that has products available for sale and your cart.

Your job is to build a **shopping cart**, **shopping cart validation**, and a **checkout method** which saves the orders from successful checkouts.

A few models have already been created for you:

 * Recipes - recipes available for sale with a total inventory available.
 * Gift Cards - gift cards available for sale.

In this app, the home page is already created for you that shows the recipes and gift cards available as well as what is in your current cart.

To get started clone the repo, bundle install, schema load and seed.

    bundle install
    rake db:schema:load
    rake db:seed

#### Requirements
 * All interactions should be via ajax.  You can use whatever method/frameworks/gems you want, backbone.js, rails ujs, custom javascript, coffeescript, etc.
 * You can not use any gems that have built in shopping cart functionality.  Build that yourself.


 * This should be a 1 page app.  Products are listed on home page as are the items in your cart.
 * Cart functions to build out:
  - Create a new cart.  Identifier should be a unique persistent first party cookie.
  - Add to cart ( recipes and gift cards )
  - Remove from cart ( anything you already added )
  - Validate Cart ( see details below )
  - Checkout Cart
  
  ---
 * Cart Validation Rules
  - Minimum of 4 plates to checkout.
  - Minimum of 2 plates per recipe. ( 4 plates of same recipe or 2 plates of 2 different recipes )
  - If buying recipes, make sure inventory is available. ( total recipe inventory - purchased plates must be > plates in cart )
  - You can buy just 1 gift card or a combination of gift cards and recipes ( min 4 plates )
  ---
 * Cart Checkout
  - Make sure validation passes.
  - Cost of each plate is $15
  - Create new models to keep track of what was purchased and by which cookie id.

#### Optional
 * Gift Cards.
  - When purchasing a gift card, create a unique code for it so it can be redeemed.
  - Allow multiple gift cards to be applied to an order.  Keep track of which gift cards have been redeemed.
  - Display a cart validation error to the user if they try to redeem a code that has already been redeemed.
 * Tests

#### Assumptions
 * Don't worry about separating anything by user, assume this is a custom website just for me and you already know everything about me.
 * There is another system that will poll for orders that are placed, so no downstream work flow is needed once the order is submitted by the customer.
 * Stub out a **charge** method that just returns **true**.  No need to do any collection of billing info or integration with any payment processor.
 * Gift cards are use it all or lose it.  If total order is $60 and a gift card is $120, you lose the remaining $60.
 * Front-end style doesn't matter.
 * If you want to down-grade to rails 3 because you are more comfortable, go for it.

#### Other Stuff
 * If you have questions ask.
 * If you make assumptions, document them.  Feel free to make as many assumptions as you need.
 * Modify any code you want that is in this app.
 * Add any gems you want as long as it fits the requirements.
 * This should take you 4-5 hours if you know what you are doing.  Once you hit 8 hours **STOP** and submit what you have.

#### Submission
 * Push your code into a branch.
 * Do a pull request once you are done.
 * Come in, we'll review it and drink beer.