/* Initial Products array used to add all of product object literals that are created in the next step. */

const products = [
  { name: "Cherries", price: 2, quantity: 0, productId: 1001, image: "images/cherry.jpg" },
  { name: "Oranges", price: 3, quantity: 0, productId: 1002, image: "images/orange.jpg" },
  { name: "Strawberries", price: 1, quantity: 0, productId: 1003, image: "images/strawberry.jpg" }
];

/* Declare an empty array named cart to hold the items in the cart */

const cart = [];

// Finds a product in the cart by productId
function findProductInCart(productId) {
  return cart.find(product => product.productId === productId);
}

/* Function addProductToCart takes in the product productId as an argument, gets the correct product based on the productId,
 increases the product's quantity. If the product is not already in the cart, add it to the cart
*/

// Adds a product to the cart or increases its quantity if it already exists
function addProductToCart(productId) {
  const product = products.find(item => item.productId === productId);
  const existingProduct = findProductInCart(productId);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    product.quantity = 1; // Set the initial quantity for the product
    cart.push(product);   // Push the product reference directly into the cart
  }
}

/* Function increaseQuantity takes in the productId as an argument
*/

function increaseQuantity(productId) {
  const product = findProductInCart(productId);
  if (product) {
    product.quantity++;
  }
}

/* Function decreaseQuantity takes in the productId as an argument
  - decreaseQuantity gets product based on the productId and decreases the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  const product = findProductInCart(productId); // Use helper function to find the product

  if (product) {
    product.quantity--; // Decrease the quantity

    if (product.quantity === 0) {
      removeProductFromCart(productId); // Call the dedicated function to remove the product
    }
  }
}

/* Function removeProductFromCart takes in the productId as an argument
  - removeProductFromCart gets product based on the productId and updates the product quantity to 0
*/

function removeProductFromCart(productId) {
  const productIndex = cart.findIndex(product => product.productId === productId);

  if (productIndex > -1) {
    cart[productIndex].quantity = 0; // Reset the product's quantity to 0
    cart.splice(productIndex, 1);   // Remove the product from the cart
  }
}

/* Function cartTotal
  - Iterates through the cart to get the total of all products and returns the sum of the products in the cart
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

let totalPaid = 0; // Global variable to track the total amount paid

function pay(amount) {
  totalPaid += amount; // Add the paid amount to the totalPaid variable
  let remaining = totalPaid - cartTotal(); // Calculate the difference between totalPaid and cartTotal()

  if (remaining >= 0) {
    totalPaid = 0; // Reset totalPaid if the cart is fully paid
    emptyCart(); // Clear the cart to reset cartTotal() to 0
  }

  return remaining; // Return the remaining amount
}

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  emptyCart,
  pay
};




