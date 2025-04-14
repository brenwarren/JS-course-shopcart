/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
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

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

/* Function to add a product to the cart */
function addProductToCart(productId) {

  console.log('addProductToCart called with productId:', productId); // Log the productId for testing in console

  // Finds the product in the products array and checks if the product is already in the cart
  const product = products.find(item => item.productId === productId);
  const existingProduct = cart.find(item => item.productId === productId);

  if (existingProduct) {
    // If the product is already in the cart, this increases its quantity
    existingProduct.quantity++;
  } else {
    // If the product is not in the cart, add it with a quantity of 1
    cart.push({ ...product, quantity: 1 });
   
  }
 
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  // Finds the index of the product in the cart array
  const productIndex = cart.findIndex(product => product.productId === productId);

  // If product is found in the cart...
  if (productIndex > -1) {
    // increase the quantity. This if statement checks if productIndex is greater than -1.  Since array indexes start at 0, a value greater than -1 means that a matching product was found in the cart.
    cart[productIndex].quantity++;
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  // Find the index of the product in the cart array
  const productIndex = cart.findIndex(product => product.productId === productId);

  // If product is found in the cart
  if (productIndex > -1) {
    // Decrease the quantity. This if statement checks if productIndex is greater than -1.  Since array indexes start at 0, a value greater than -1 means that a matching product was found in the cart.
    cart[productIndex].quantity--;

    // If quantity becomes 0, remove the product from the cart
    if (cart[productIndex].quantity === 0) {
      cart.splice(productIndex, 1);
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  // Finds the index of the product in the cart array
  const productIndex = cart.findIndex(product => product.productId === productId);

  // If product is found in the cart Remove the product from the cart
  if (productIndex > -1) {
    cart.splice(productIndex, 1);
  }
}

/* Create a function named cartTotal that has no parameters
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
/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart.length = 0; // This effectively clears the cart array
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

function pay(amount) {
  const totalCost = cartTotal();
  return amount - totalCost; // Returns the difference between amount paid and total cost
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
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
