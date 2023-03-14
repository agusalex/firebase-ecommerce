# Firebase ecommerce [Click for demo](https://firebase-ecommerce-brown.vercel.app)

This is really simple bare-bones e-commerce platform built with React, Firebase, and LocalStorage. It allows users to add products to their cart and view an order summary.

![screenshot of demo](https://raw.githubusercontent.com/agusalex/firebase-ecommerce/main/example-readme.png)

## Installation

To run the application on your local machine, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Create a Firebase account and create a new application.
4. Add items to Firestore.
5. Start the application using `npm run start`.

## Functionality

### Adding products to the cart

Products can be added to the cart by clicking on the "Add to Cart" button on the product page. If the product is out of stock or the desired quantity exceeds the maximum stock quantity, it cannot be added to the cart.

### Cart Persistence

The application uses LocalStorage to persist the user's cart.

### Order Summary

Once you have added products to the cart, you can go to the order summary page by clicking on the cart icon in the navigation bar and clicking on "Finish Purchase".

### Out of Stock Warning

If you try to add more products than are available in stock, a warning message will be displayed indicating that there is not enough stock available.

## Future Improvements

1. Sync stock in backend, dont allow orders that would cause negative stock 
2. Add auth to prevent abuse
3. Add styling to checkout page
4. Improve mobile and desktop responsiveness and style
5. Make a my orders page based on user
