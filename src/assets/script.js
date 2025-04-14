/* Array named products used to add all of product object literals that are created in the next step. */

/* Create 3 product objects:
   Each product has five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

const products = [
  { name: "Cherries", price: 2, quantity: 20, productId: 1001, image: "images/cherry.jpg" },
  { name: "Oranges", price: 3, quantity: 20, productId: 1002, image: "images/orange.jpg" },
  { name: "Strawberries", price: 1, quantity: 20, productId: 1003, image: "images/strawberry.jpg"}
];

/* Declare an empty array named cart to hold the items in the cart */

const cart = [];

/* Function findProductInCart takes in the productId as an argument
  - findProductInCart should return the product from the cart based on the productId
*/

// Finds a product in the cart by productId
function findProductInCart(productId) {
  return cart.find(product => product.productId === productId);
}

/* Function addProductToCart takes in the product productId as an argument
  - addProductToCart gets the correct product based on the productId
  - addProductToCart increases the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

// Adds a product to the cart or increases its quantity if it already exists
function addProductToCart(productId) {
  const product = products.find(item => item.productId === productId);
  const existingProduct = findProductInCart(productId);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
}

/* Function increaseQuantity takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  const product = findProductInCart(productId);
  if (product) {
    product.quantity++;
  }
}

/* Function decreaseQuantity takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  const productIndex = cart.findIndex(product => product.productId === productId);

  if (productIndex > -1) {
    cart[productIndex].quantity--;

    if (cart[productIndex].quantity === 0) {
      cart.splice(productIndex, 1);
    }
  }
}

/* Function removeProductFromCart takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  const productIndex = cart.findIndex(product => product.productId === productId);

  if (productIndex > -1) {
    cart.splice(productIndex, 1);
  }
}

/* Function cartTotal
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal() {
  let total = 0;

  // Iterate through the cart array
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total += product.price * product.quantity;
  }

  return total;
}
/* Function emptyCart empties the products from the cart */

function emptyCart() {
  cart.length = 0; // This effectively clears the cart array
}

/* Function pay takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

let remainingBalance = 0;

function pay(amount) {
  const totalCost = cartTotal();
  remainingBalance = amount - totalCost;
  return remainingBalance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  findProductInCart,
  remainingBalance,
};
